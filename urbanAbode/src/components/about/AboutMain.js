import React from "react";
import Image from "next/image";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMobileDetection } from "@/hooks/useMobile";

const AboutMain = () => {
  const mobile = useMobileDetection();

  return (
    <div className="about-main">
      <h1 className="about-main-heading">Our work speaks for itself!</h1>
      <div className="about-main-content">
        <div className="about-main-imgs">
          <Image
            src="/TP.svg"
            alt="Trust Pilot"
            width={mobile ? 100 : 150}
            height={mobile ? 100 : 150}
          />
          <Image
            src="/CT.svg"
            alt="Capterra"
            width={mobile ? 100 : 150}
            height={mobile ? 100 : 150}
          />
        </div>
        <div className="review-container">
          <Swiper
            spaceBetween={1}
            slidesPerView={1.5}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Review
                imgUrl={"CEO.png"}
                review="My dream home found effortlessly! Predicted prices were spot-on. Thrilled and grateful! Highly recommend!"
                name="Alex"
                age={28}
                state="San Mateo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Review
                imgUrl={"Marine.png"}
                review="Ecstatic with UrbanAbode! Found my dream home effortlessly, and their price predictions were spot-on. Highly recommend their services!"
                name="Marine"
                age={36}
                state="Palo Alto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Review
                imgUrl={"brooklyn.png"}
                review="UrbanAbode made my dream home a reality! User-friendly website, perfect match found. Thrilled and highly recommend!"
                name="Brooklyn"
                age={25}
                state="San Jose"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Review
                imgUrl={"Randy.png"}
                review="UrbanAbode made home buying a breeze! Found my dream property effortlessly on their website. Thrilled with my purchase and highly recommend their service!"
                name="Randy"
                age={32}
                state="San Francisco"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
