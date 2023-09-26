import React from "react";
import {createRoot} from "react-dom/client"
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from "./App";
import "./public/style.css";
import Home from "./Components/Home";
import CountryDetail from "./Components/CountryDetail";

const appLayout = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children : [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/countryDetail/:name",
                element:<CountryDetail/>,
              
            },
          

        ]

    }
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appLayout} />)