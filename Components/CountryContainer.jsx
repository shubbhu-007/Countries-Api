import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import CountryCard from "../Components/CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountryContainer = ({ query }) => {
  const [data, setData] = useState([]);

  async function getData() {
    const countrylist = await fetch("https://restcountries.com/v3.1/all");
    const res = await countrylist.json();
    setData(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return data.length === 0 ? (
    <CountriesListShimmer />
  ) : (
    <div className="countries-container">
      {data
        .filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
        .map((country, index) => {
          return (
            <Link
              className="country-card"
              to={`/countryDetail/${country.name.common}`}
              key={index}
              state = {{...country}}
            >
              <CountryCard {...country}  />
            </Link>
          )
        })}
    </div>
  );
};

export default CountryContainer;
