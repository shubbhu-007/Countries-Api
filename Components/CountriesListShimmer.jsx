import React from "react";
import "../public/CountriesListShimmer.css";
const CountriesListShimmer = () => {
  return (
    <div className="countries-container ">

      {
      Array.from({ length: 20 }).map((el, index) => {
        return (
        <div 
        key={index} 
        className="country-card shimmer-card"
        >
          <div className="shimmer-image shine">

          </div>
          <div className="shimmer-title shine">
          </div>
          <div className="shimmer-population shine">
          </div>
          <div className="shimmer-capital shine">
          </div>

        </div>
        )
      })
      }
    </div>
  );
};

export default CountriesListShimmer;
