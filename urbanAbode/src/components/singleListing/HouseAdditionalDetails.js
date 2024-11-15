import { useMobileDetection } from "@/hooks/useMobile";
import React from "react";
import Image from "next/image";

const HouseAdditionalDetails = ({ house }) => {
  const mobile = useMobileDetection();
  const filteredProperties = Object.keys(house.description).reduce(
    (acc, key) => {
      if (
        house.description[key] !== null &&
        house.description[key] !== undefined
      ) {
        acc[key] = house.description[key];
      }
      return acc;
    },
    {}
  );

  const selectedProperties = {
    baths: filteredProperties.baths,
    beds: filteredProperties.beds,
    lot_sqft: filteredProperties.lot_sqft,
    sqft: filteredProperties.sqft,
    stories: filteredProperties.stories,
    year_built: filteredProperties.year_built,
  };

  return (
    <div className="houseAdditionalDetails-container">
      <p className="text-primary heading-listing">Brief Characteristics</p>
      <div>
        {selectedProperties.baths && (
          <div className="additionDetailBox">
            <Image
              src="/bath.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.baths}</p>
          </div>
        )}
      </div>
      <div>
        {selectedProperties.beds && (
          <div className="additionDetailBox">
            <Image
              src="/beds.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.beds}</p>
          </div>
        )}
      </div>
      <div>
        {selectedProperties.lot_sqft && (
          <div className="additionDetailBox">
            <Image
              src="/sqft.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.lot_sqft}</p>
          </div>
        )}
      </div>
      <div>
        {selectedProperties.sqft && (
          <div className="additionDetailBox">
            <Image
              src="/area.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.sqft}</p>
          </div>
        )}
      </div>
      <div>
        {selectedProperties.stories && (
          <div className="additionDetailBox">
            <Image
              src="/floors.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.stories}</p>
          </div>
        )}
      </div>
      <div>
        {selectedProperties.year_built && (
          <div className="additionDetailBox">
            <Image
              src="/calendar.png"
              alt="My Image"
              width={mobile ? 35 : 35}
              height={mobile ? 25 : 30}
            />
            <p>{selectedProperties.year_built}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseAdditionalDetails;
