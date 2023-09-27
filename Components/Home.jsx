import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryContainer from "./CountryContainer";
import { useOutlet, useOutletContext } from "react-router-dom";

const Home = () => {
  const [query, setquery] = useState("");
  const [isDark] = useOutletContext();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setquery={setquery} />
        <SelectMenu />
      </div>
      <CountryContainer query={query} />
    </main>
  );
};

export default Home;
