import { useState , useContext} from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryContainer from "./CountryContainer";
import { useOutlet, useOutletContext } from "react-router-dom";
import {ThemeContext} from "./utils/ThemeContext";

const Home = () => {
  const [query, setquery] = useState("");
//   const [isDark] = useOutletContext();

// Using Context Api
  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setquery={setquery} />
        <SelectMenu setquery={setquery}/>
      </div>
      <CountryContainer query={query} />
    </main>
  );
};

export default Home;
