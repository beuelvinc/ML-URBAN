import React from "react";
import Image from "next/image";
import { useMobileDetection } from "@/hooks/useMobile";

const PropertyListing = ({ house }) => {
  const mobile = useMobileDetection()

  return (
    <div className="listing">
      <div className="listing-img-container">
        <img
          src={
            house.primary_photo ? (
              house.primary_photo.href
            ) : (
              <Image
                src="/no-house.png"
                alt="My Image"
                width={mobile ? 35 : 60}
                height={mobile ? 25 : 35}
              />
            )
          }
          alt="listing"
          className="offer-img"
        />
      </div>
      <div className="listing-details">
        <span className="listing-text">
          Large 4-room apartment with a beautiful terrace
        </span>
        <div>
          <p className="offer-price">
            <b>{house.list_price}$</b>
          </p>
          <p className="offer-address">{house.location.address.city}</p>
          <p className="offer-address">{house.location.address.line}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
