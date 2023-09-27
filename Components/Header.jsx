import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({theme}) => {
  const [isDark,setisDark] = theme;

  //Dom Manipulating
  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }



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
