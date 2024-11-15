import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProperty } from "@/features/propertySlice";
import { useRouter } from "next/router";
import Navbar from "@/components/homepage/Navbar";
import ContactForm from "@/components/singleListing/ContactForm";
import Footer from "@/components/footer";
import ImgCarousel from "@/components/singleListing/ImgCarousel";
import HouseDetails from "@/components/singleListing/HouseDetails";
import AdvertisorDetails from "@/components/singleListing/AdvertisorDetails";
import HouseAdditionalDetails from "@/components/singleListing/HouseAdditionalDetails";
import Lottie from "lottie-react";
import animationData from "../../../public/splash.json";
import Location from "@/components/singleListing/Location";

const Listing = () => {
  let { house, isLoading } = useSelector((state) => state.propertyPrediction);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    id && dispatch(fetchSingleProperty(id));
  }, [id]);

  return (
    <div>
      <div className="secondary-navbar">
        <Navbar />
      </div>
      {!isLoading && Object.keys(house).length > 0 ? (
        <div className="singleListingContainer">
          <div className="singleListing">
            <ImgCarousel house={house} />
            <HouseDetails house={house} />
            <Location location={house.location.address.coordinate} />
          </div>
          <div className="singleListDetails">
            <ContactForm />
            <AdvertisorDetails advertisor={house.advertisers[0]} />
            <HouseAdditionalDetails house={house} />
          </div>
        </div>
      ) : (
        <div className="loading-container">
          <Lottie animationData={animationData} />
        </div>
      )}
      <div></div>
      <Footer />
    </div>
  );
};

export default Listing;
