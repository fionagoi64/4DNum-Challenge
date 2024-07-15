import React from "react";
import logo from "../assets/images/logo.png";
import logoText from "../assets/images/logotext.svg";
import dashboard from "../assets/images/dashboard.svg";
import refreshLight from "../assets/images/refreshlight.svg";
import refreshDark from "../assets/images/refreshdrk.svg";
import { MdLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Nav = () => {
  return (
    // web view
    <header id="header" className="header flex items-center sticky top-0">
      <div className="relative flex items-center justify-between">
        <a href="index.html" className="logo flex items-center me-auto xl:me-0">
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo text" />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <img src={dashboard} alt="" />
            </li>
            <li>
              <div>
                <img src="" alt="" />
              </div>
            </li>
            <li>
              <h1>datepicker</h1>
            </li>
            <li>
              <img src={refreshLight} alt="" />
            </li>
            <li>
              <div>
                <MdLightMode />
                <p>Light Mode</p>
                <div className="relative h-3 w-6 bg-black rounded-full">
                  <div className="absolute w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </li>
            <li>
              <GrLanguage />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
