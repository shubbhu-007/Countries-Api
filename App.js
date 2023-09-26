import { useState } from "react";
import CountryContainer from "./Components/CountryContainer";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";

const App = () => {
    const [query,setquery] = useState("");
    return (
        <>
        <Header/>
        <div className="search-filter-container">
        <SearchBar setquery={setquery}/>
        <SelectMenu/>
        </div>
        <CountryContainer query = {query}/>
        


        </>

    )
}

export default App;