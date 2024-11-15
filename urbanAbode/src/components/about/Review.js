import React from "react";
import Image from "next/image";

const Review = ({ imgUrl, review, name, age, state }) => {
  return (
    <div className="about-main-text">
      <div>
        <Image src={`/${imgUrl}`} alt="Ceo Image" width={100} height={100} />
      </div>
      <div>
        <p className="review-text-mobile">{review}</p>
        <p className="about-main-details">
          {name}, {age}, {state}
        </p>
      </div>
    </div>
  );
};

export default Review;
