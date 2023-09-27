import { useState } from "react";
import CountryContainer from "./Components/CountryContainer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";



const App = () => {
    const [isDark, setisDark] = useState(
        JSON.parse(localStorage.getItem("isDarkMode"))
    );

    return (
        <>
            <Header theme = {[isDark,setisDark]}/>
            {/* Outlet Using React Context Api */}
            <Outlet context={[isDark,setisDark]}/>
        </>


    )
}



export default App;