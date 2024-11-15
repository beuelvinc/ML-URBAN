import React, { useState, useEffect } from "react";
import Navbar from "@/components/homepage/Navbar";
import OffersPageSettings from "@/components/offersPage/OffersPageSettings";
import Footer from "@/components/footer";
import OffersPageResults from "@/components/offersPage/OffersPageResults";
import { fetchProperties } from "@/features/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import animationData from "../../../public/splash.json";
import Lottie from "lottie-react";
import { resetMortgage } from "@/features/propertySlice";

const Header = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    houseType: "all",
    streetName: "all",
    status: "for_rent",
    branding: "all",
  });
  let { houses, isLoading } = useSelector((state) => state.propertyPrediction);

  const priceStats = houses.reduce(
    (stats, house) => {
      const price = parseFloat(house.list_price);

      if (!isNaN(price)) {
        if (house.status === "for_sale") {
          stats.forSale.push(price);
        } else if (house.status === "for_rent") {
          stats.forRent.push(price);
        }
      }

      return stats;
    },
    { forSale: [], forRent: [] }
  );

  const minPriceForSale = Math.min(...priceStats.forSale);
  const maxPriceForSale = Math.max(...priceStats.forSale);

  const minPriceForRent = Math.min(...priceStats.forRent);
  const maxPriceForRent = Math.max(...priceStats.forRent);

  const [sliderValue, setSliderValue] = useState(1700);

  useEffect(() => {
    if (houses.length < 1) {
      dispatch(fetchProperties());
    }
  }, []);

  useEffect(() => {
    filters.status === "for_sale"
      ? setSliderValue(699000)
      : setSliderValue(1700);
  }, [filters.status]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    dispatch(resetMortgage());
  }, []);

  return (
    <div id="home">
      <div className="secondary-navbar">
        <Navbar />
      </div>
      <div className="offersPageMain">
        <div className="offersPageMain-header">
          <span className="header-description_heading">
            Search for an offer
          </span>
          <p className="header-description_text">
            Choose from the most advantageous offers
          </p>
        </div>
        <div className="offersPageSettings">
          <OffersPageSettings
            houses={houses}
            filters={filters}
            setFilters={setFilters}
          />

          <div className="offersPageSettings-slider--container">
            <div className="offersPageSettings-slider--container--sub">
              <input
                type="range"
                min={
                  filters.status === "for_sale"
                    ? minPriceForSale
                    : minPriceForRent
                }
                max={
                  filters.status === "for_sale"
                    ? maxPriceForSale
                    : maxPriceForRent
                }
                value={sliderValue}
                onChange={handleSliderChange}
                className="offersPageSettings-slider"
                id="myRange"
              />
              <div className="offersPageSettings-slider-indicators">
                <div className="offersPageSettings-slider-indicator offersPageSettings-slider-indicator-start">
                  ${sliderValue}
                </div>
                <div className="offersPageSettings-slider-indicator offersPageSettings-slider-indicator-end">
                  $
                  {filters.status === "for_sale"
                    ? maxPriceForSale
                    : maxPriceForRent}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <Lottie animationData={animationData} />
          </div>
        ) : (
          houses && (
            <OffersPageResults
              filters={filters}
              houses={houses}
              sliderValue={sliderValue}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Header;
