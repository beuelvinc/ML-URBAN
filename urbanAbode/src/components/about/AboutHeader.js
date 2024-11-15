import React from "react";
import Image from "next/image";
import { useMobileDetection } from "@/hooks/useMobile";

const AboutHeader = () => {
  const mobile = useMobileDetection();

  return (
    <div className="about-header">
      <Image
        src="/about.png"
        alt="listing"
        width={mobile ? 0 : 488}
        height={mobile ? 0 : 316}
      />
      <div className="about-text-container">
        <span className="text-primary">About us</span>
        <span className="text-secondary text-about">
          <p>
            <b>Urban Abode</b> is a place where dreams find a home. We are a
            forward-thinking real estate company, committed to simplifying your
            property journey. Our user-friendly approach and reliable data
            empower buyers to discover their dream homes effortlessly. With
            UrbanAbode, your satisfaction is our top priority, and we take pride
            in guiding you towards your perfect place to call home.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutHeader;
