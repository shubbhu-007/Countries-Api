import CountryContainer from "./Components/CountryContainer";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";

const App = () => {
    return (
        <>
        <Header/>
        <div className="search-filter-container">
        <SearchBar/>
        <SelectMenu/>
        </div>
        <CountryContainer/>
        


        </>

    )
}

export default App;