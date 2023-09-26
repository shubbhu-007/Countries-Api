import { useState } from "react";
import CountryContainer from "./Components/CountryContainer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";



const App = () => {
    return (
        <>
        <Header/>
        <Outlet/>       
        </>
        

    )
}



export default App;