import React from "react";
import Image from "next/image";

const AdvertisorDetails = ({ advertisor }) => {
  return (
    <>
      {advertisor.broker && (
        <div className="advertiser_container">
          <p className="text-primary heading-listing">Advertiser By</p>
          <Image
            src={advertisor.photo ? advertisor.photo.href : "/user.png"}
            alt="Your Image Alt Text"
            width={120}
            height={120}
            layout="fixed"
            objectFit="cover"
            className="advertiser_img"
            style={{ marginBottom: "10px" }}
          />

          <div>
            <p style={{ fontWeight: "800" }}>{advertisor.broker.name}</p>
            <p style={{ marginTop: "5px", fontSize: 13 }}>{advertisor.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisorDetails;
