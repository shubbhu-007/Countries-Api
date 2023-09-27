import { useState } from "react";
// import CountryContainer from "./Components/CountryContainer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
// import { ThemeContext } from "./Components/utils/ThemeContext";
import { ThemeSwitch } from "./Components/utils/ThemeContext";

const App = () => {

    return (
        <ThemeSwitch>
            <Header/>
            <Outlet/>
        </ThemeSwitch>


    )
}



export default App;