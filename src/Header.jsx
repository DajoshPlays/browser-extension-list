import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./assets/images/logo.svg";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";

function Header({ isLight, handleToggele }) {
  return (
    <header>
      <div className="w-[80vw] my-7 mx-auto p-4 rounded-2xl bg-[#2d3142] flex justify-between items-center">
        <img src={logo} alt="logo image" />
        <button
          // onClick={handleToggle}
          className="bg-[#4c4f63] p-4 rounded-lg cursor-pointer"
        >
          <img src={sun} alt="sun-icon" />
        </button>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
