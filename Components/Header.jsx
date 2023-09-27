import { useState , useContext } from "react";
import { ThemeContext } from "./utils/ThemeContext";
import { Link } from "react-router-dom";
const Header = ({theme}) => {
  // ----> Passing as props from app.js to set theme the actual state is defined in app.ja
  // const [isDark,setisDark] = theme;

  // ---> Dom Manipulating
  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }

  //---> Using Context Api
  const [isDark,setisDark] = useContext(ThemeContext);



  return (
    <header className={`header-container ${isDark? "dark" : ""}`}>
      <div className="header-content">
        <Link to="/">
          <h2 className="title">Where in the world? </h2>
        </Link>
        <p
          className="theme-changer"
          onClick={() => {
            setisDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
