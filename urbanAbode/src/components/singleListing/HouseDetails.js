import { useMobileDetection } from "@/hooks/useMobile";
import Image from "next/image";
import React, { useState } from "react";
import MortgageForm from "./MortgageForm";

const HouseDetails = ({ house }) => {
  const mobile = useMobileDetection();
  const [openMortgageMenu, setOpenMortgageMenu] = useState(false);

  const houseTypeImages = {
    condos: "/condo.png",
    land: "/land.png",
    apartment: "/apartment.png",
    duplex_triplex: "/duplex.png",
    single_family: "/singlefamily.png",
    multi_family: "/multifamily.png",
    townhomes: "/townhome.png",
  };

  const checkHouseType = (type) => {
    const imageUrl = houseTypeImages[type] || "/unknown.png";
    return (
      <Image
        src={imageUrl}
        alt="listing"
        width={mobile ? 35 : 50}
        height={mobile ? 35 : 50}
      />
    );
  };

  return (
    <div className="houseDetailContainer">
      <div className="houseDetailsubContainer">
        <div className="detailSub">
          {checkHouseType(house.description.type)}
          <p>
            {house.description.type
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
        <div className="detailSub">
          <Image
            src="/area.png"
            alt="listing"
            width={mobile ? 35 : 50}
            height={mobile ? 35 : 50}
          />
          <p>{house.description.sqft} m2</p>
        </div>
        <div className="detailSub">
          <Image
            src="/location.png"
            alt="listing"
            width={mobile ? 35 : 50}
            height={mobile ? 35 : 50}
          />
          <p>{house.location.address.line}</p>
        </div>
      </div>

      {house.status === "for_sale" && (
        <div className="mortgageContainer">
          <div className="mortgageShowContainer">
            <div>
              <span>Motgage since:</span>
              <p>{house.mortgage.estimate.total_payment}$/ month</p>
            </div>
            <button
              onClick={() => setOpenMortgageMenu(!openMortgageMenu)}
              className="mortgage-btn primary-btn contact-btn showmore-btn"
            >
              <p className="mortgage-btn-text">Get a mortgage</p>
              <div
                className={
                  openMortgageMenu ? `mortgage-icon` : "mortage-icon-back"
                }
              >
                <Image src="/next.png" alt="listing" width={15} height={15} />
              </div>
            </button>
          </div>

          {openMortgageMenu ? <MortgageForm mortgage={house.mortgage} /> : null}
        </div>
      )}

      <div className="details-description">
        <p>
          {house.description.text
            ? house.description.text
            : "Welcome to a haven of modern luxury and timeless charm. This exquisite home boasts an open and airy design, adorned with the finest details that capture both sophistication and comfort. The expansive windows flood the interior with natural light, illuminating the high-end finishes and thoughtfully curated spaces. The heart of the home, the gourmet kitchen, stands as a masterpiece with top-tier appliances and sleek surfaces, a dream come true for culinary enthusiasts. Step outdoors into a picturesque oasis – a meticulously landscaped backyard that invites relaxation and is primed for unforgettable gatherings. Upstairs, the bedrooms offer spacious sanctuaries, each accompanied by a uniquely designed en-suite bathroom, ensuring privacy and individuality. "}
        </p>
      </div>
    </div>
  );
};

export default HouseDetails;
