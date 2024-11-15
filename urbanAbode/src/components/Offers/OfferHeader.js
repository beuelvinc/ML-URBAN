import React from "react";
import Link from "next/link";

const OfferHeader = () => {
  return (
    <div className="offer-header">
      <div className="offer-header-text">
        <span className="text-primary">Top offers</span>
        <p className="text-secondary offer-text">
          Fulfill your career dreams, enjoy all the achievements of the city
          center and luxury housing to the fullest.
        </p>
      </div>
      <div className="offer-header-btn">
        <Link href={`/offers`} className="offers-btn secondary-btn">Show all offers</Link>
      </div>
    </div>
  );
};

export default OfferHeader;
