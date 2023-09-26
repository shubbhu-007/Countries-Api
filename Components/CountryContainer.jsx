import { useEffect, useState } from "react";
import Data from "../Data.json";
import CountryCard from "../Components/CountryCard";
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
    "Loading ....."
  ) : (
    <div className="countries-container">
    {
      data
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country, index) => {
          return <CountryCard {...country} key={index} />;
        })
    }
    </div>
  );
};

export default CountryContainer;
