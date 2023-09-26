const SearchBar = ({setquery}) => {
    const setInput = (e) => {
        setquery(e.target.value.toLowerCase());
    }

    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for a country...."  onChange={setInput}/>
        </div>
    )
}

export default SearchBar;