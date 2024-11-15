// pages/api/my-api.js
const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");

function knn(features, labels, predictionPoint, k) {
  const { mean, variance } = tf.moments(features, 0);

  const scaledPrediction = predictionPoint.sub(mean).div(variance.pow(0.5));

  return (
    features
      .sub(mean)
      .div(variance.pow(0.5))
      .sub(scaledPrediction)
      .pow(2)
      .sum(1)
      .pow(0.5)
      .expandDims(1)
      .concat(labels, 1)
      .unstack()
      .sort((a, b) => (a.arraySync()[0] > b.arraySync()[0] ? 1 : -1))
      .slice(0, k)
      .reduce((acc, pair) => acc + pair.arraySync()[1], 0) / k
  );
}

let { features, labels, testFeatures, testLabels } = loadCSV("houses.csv", {
  shuffle: true,
  splitTest: 10,
  dataColumns: ["floors", "bedrooms", "sqft_lot"],
  labelColumns: ["price"],
});

labels = tf.tensor(labels);
testLabels = tf.tensor(testLabels);
features = tf.tensor(features);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { floors, bedrooms, sqft_lot } = req.body;
    const prediction = knn(
      features,
      labels,
      tf.tensor([parseInt(floors), parseInt(bedrooms), parseInt(sqft_lot)]),
      10
    );
    res.status(200).json({ success: true, prediction });
  } else {
    res.status(405).json({ success: false, message: "you are stupid" });
  }
}
