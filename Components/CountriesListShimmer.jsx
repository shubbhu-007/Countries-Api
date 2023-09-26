import React from "react";
import "../public/CountriesListShimmer.css";
const CountriesListShimmer = () => {
  return (
    <div className="countries-container">

      {
      Array.from({ length: 20 }).map((el, index) => {
        return <div key={index} className="country-card shimmer-card"></div>;
      })
      }
    </div>
  );
};

export default CountriesListShimmer;
