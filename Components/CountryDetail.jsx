import React, { useEffect, useState } from "react";
import "../public/countryDetail.css"
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
const CountryDetails = () => {
  const [isDark] = useOutletContext();
  const {name} = useParams();
  const {state} = useLocation();
  let countryName = name;
  const [countryData, setCountryData] = useState(null);
   function updateData(actualData){
    setCountryData({
      name: actualData.name.common,
      nativeName: Object.values(actualData.name.nativeName)[0].common,
      population: actualData.population,
      region: actualData.region,
      subregion: actualData.subregion,
      capital: actualData.capital,
      flag: actualData.flags.svg,
      tld: actualData.tld,
      languages: Object.values(actualData.languages).join(", "),
      currencies: Object.values(actualData.currencies)
        .map((currency) => currency.name)
        .join(", "),
        borders:[],
    })

    if(actualData.borders === undefined){
      actualData.borders = [];
    }

    Promise.all(
      actualData.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
       .then((res) => res.json())
       .then(([data]) => data.name.common)
     })
    ).then((borders) => {
      (setCountryData((prevState) => ({...prevState , borders})))
    })

  }


  async function fetchCountryDetails(){
    const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const res = await data.json();
    const Data = res[0];
    updateData(Data);
  } 

  useEffect(() => {
    if(state){
     updateData(state);
     return ;
      
    }
    fetchCountryDetails();

  },[countryName]);

  return countryData === null ? (
    "Loading........"
  ) : (
    <main className={`${isDark?"dark":""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData?.population?.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital && countryData.capital.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border,index) => (
                  <Link key={index} to={`/countryDetail/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
