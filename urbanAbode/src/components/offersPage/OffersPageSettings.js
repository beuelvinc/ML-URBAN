import React from "react";

const OffersPageSettings = ({ houses, filters, setFilters }) => {
  return (
    <div>
      <div className="offersPageSettings-filterHeading--container">
        <p className="offersPageSettings-filterHeading--text">
          Filter settings
        </p>
        <div className="offersPageSettings-filterHeading--line"></div>
      </div>
      <div className="offersPageSettings-filters">
        <select
          className="offersPageSettings-filters-dropdown"
          name="houseTypes"
          id="houseTypes"
          onChange={(e) =>
            setFilters({ ...filters, houseType: e.target.value })
          }
        >
          <option value="all">All</option>
          {[...new Set(houses.map((house) => house.description.type))].map(
            (type, i) => (
              <option key={i} value={type}>
                {type
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </option>
            )
          )}
        </select>

        <select
          className="offersPageSettings-filters-dropdown"
          name="streetNames"
          id="streetNames"
          onChange={(e) =>
            setFilters({ ...filters, streetName: e.target.value })
          }
        >
          <option value="all">All</option>
          {[
            ...new Set(
              houses.map((house) => house.location.address.street_name)
            ),
          ].map((type, i) => (
            <option key={i} value={type}>
              {type
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </option>
          ))}
        </select>

        <select
          className="offersPageSettings-filters-dropdown"
          name="status"
          id="status"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="for_rent">For rent</option>
          <option value="for_sale">For sale</option>
        </select>

        <select
          className="offersPageSettings-filters-dropdown"
          name="branding"
          id="branding"
          onChange={(e) => setFilters({ ...filters, branding: e.target.value })}
        >
          <option value="all">All</option>
          {[
            ...new Set(
              houses.map((house) => house.branding[0] && house.branding[0].name)
            ),
          ].map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OffersPageSettings;
