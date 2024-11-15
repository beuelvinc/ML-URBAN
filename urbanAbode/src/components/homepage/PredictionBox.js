import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchPricePrediction } from "@/features/propertySlice";
import { MoonLoader } from "react-spinners";
import { useMobileDetection } from "@/hooks/useMobile";

const PredictionBox = () => {
  const mobile = useMobileDetection();
  const [err, setErr] = useState(true);
  const [details, setDetails] = useState({
    bedrooms: 0,
    floors: 0,
    sqft_lot: 0,
  });
  const { price, isPriceLoading } = useSelector(
    (state) => state.propertyPrediction
  );
  const dispatch = useDispatch();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleBedroomsChange = (e) => {
    const value = parseInt(e.target.value);
    setDetails({ ...details, bedrooms: Math.max(1, value) });
  };

  const handleFloorsChange = (e) => {
    const value = parseInt(e.target.value);
    setDetails({ ...details, floors: Math.max(1, value) });
  };

  const handleSqftLotChange = (e) => {
    const value = parseInt(e.target.value);
    setDetails({ ...details, sqft_lot: Math.max(1, value) });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (!err && details.sqft_lot > 500) {
        dispatch(fetchPricePrediction(details));
      }
    }
  };

  const checkErrors = (arr) => {
    if (Object.values(arr).some((value) => value === 0 || isNaN(value))) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  useEffect(() => {
    checkErrors(details);
  }, [details]);

  const handleSubmit = (details, e) => {
    e.preventDefault();
    dispatch(fetchPricePrediction(details));
  };

  return (
    <form className="prediction-box" onKeyDown={handleKeyPress}>
      <span className="prediction-heading">Predict House Price!</span>
      <p className="note">Note: the lot size should be atleast 500m2</p>
      <div className="prediction-input_container">
        <div className="prediction-input_container--details">
          <div className="prediction-room_box">
            <Image
              src="/beds.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="rooms"
              value={details.bedrooms}
              onChange={handleBedroomsChange}
            />
          </div>
          <div className="prediction-room_box">
            <Image
              src="/stair.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="floors"
              value={details.floors}
              onChange={handleFloorsChange}
            />
          </div>
          <div className="prediction-room_box">
            <Image
              src="/area.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="sqft area"
              value={details.sqft_lot}
              onChange={handleSqftLotChange}
            />
          </div>
        </div>
        <div className="prediction-input_container--result">
          {!isPriceLoading ? (
            <div className="prediction-result-box">
              <span className="predicted-price-heading">
                The predicted price will be
              </span>
              <span className="predicted-price">${price}</span>
            </div>
          ) : (
            <div className="prediction-loader-container">
              <MoonLoader
                color="#1C3988"
                loading={isPriceLoading}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
              />
            </div>
          )}
        </div>
      </div>
      <div className="prediction-btn-box">
        <input
          type="submit"
          href="/"
          className={`${
            details.sqft_lot < 500 || err ? "disabled" : null
          } primary-btn prediction-btn`}
          onClick={(e) => handleSubmit(details, e)}
          disabled={details.sqft_lot < 500 || err ? true : false}
        />
      </div>
    </form>
  );
};

export default PredictionBox;
