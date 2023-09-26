import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryContainer from "./CountryContainer";

const Home = () => {
    const [query,setquery] = useState("");
    return (
        <>
        <div className="search-filter-container">
        <SearchBar setquery={setquery}/>
        <SelectMenu/>
        </div>
        <CountryContainer query = {query}/>
        </>
    )
}

export default Home;