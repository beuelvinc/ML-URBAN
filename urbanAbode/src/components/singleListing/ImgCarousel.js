import React, { useState, useRef } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMobileDetection } from "@/hooks/useMobile";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ImgCarousel = ({ house }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobile = useMobileDetection();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  const handleIndicationSymbolClick = () => {
    if (swiperPrevRef.current) {
      swiperPrevRef.current.click();
    }
  };

  const handleNext = () => {
    if (swiperNextRef.current) {
      swiperNextRef.current.click();
    }
  };

  return (
    <div>
      <img
        className="singleListImg"
        src={house.photos[activeIndex].href}
        alt="Main"
      />
      <div className="indicator-container">
        <div
          ref={swiperNextRef}
          className="swiper-button-next"
          style={{ display: "none" }}
        ></div>
        <div
          ref={swiperPrevRef}
          className="swiper-button-prev"
          style={{ display: "none" }}
        ></div>
        <div
          onClick={handleIndicationSymbolClick}
          className="indication-symbol imgCarouselPrev"
        >
          <Image
            src="/back.png"
            alt="listing"
            width={mobile ? 15 : 20}
            height={mobile ? 15 : 20}
          />
        </div>
        <Swiper
          spaceBetween={1}
          slidesPerView={2.5}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={handleSlideChange}
        >
          {house.photos.map((photo, i) => {
            return (
              <SwiperSlide
                key={i}
                className={
                  i === activeIndex ? "current-slide img-slide" : "img-slide"
                }
              >
                <img
                  className="single-listing-img"
                  src={photo.href}
                  alt={`Slide ${i}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          onClick={handleNext}
          className="indication-symbol indication-symbol-next"
        >
          <Image
            src="/next.png"
            alt="listing"
            width={mobile ? 15 : 20}
            height={mobile ? 15 : 20}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;
