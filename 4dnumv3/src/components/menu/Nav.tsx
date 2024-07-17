import React from "react";
import hamburger from "../../assets/images/hamburger.svg";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logotext.svg";
import dashboard from "../../assets/images/dashboard.svg";
import refresh from "../../assets/images/refresh.svg";
import { MdLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import Datepicker from "../buttons/Datepicker";

const Nav = () => {
  return (
    // web view
    <>
      <header
        id="header"
        className="fixed flex items-center w-full bg-transparent text-default z-50"
      >
        <div className="relative flex items-center w-full gap-[174px]">
          <button className="hidden">
            <img src={hamburger} alt="" />
          </button>

          <div className="logo flex items-center me-auto xl:me-0">
            <img
              src={logo}
              alt="logo"
              className="max-h-9 mr-2 ml-5 rounded-full"
            />
            <img src={logoText} alt="logo" />
          </div>

          <nav id="navmenu" className="w-full">
            <ul className="flex flex-row items-center justify-between bg-navbg py-14px pr-5 pl-10">
              <li>
                <img src={dashboard} alt="" className="h-10 w-10" />
              </li>
              <li>
                <div>
                  <img src="" alt="" />
                </div>
              </li>
              <li>
                <Datepicker />
              </li>
              <li>
                <img src={refresh} alt="" />
              </li>
              <li>
                <div className="flex flex-row items-center">
                  <MdLightMode />
                  <p>Light Mode</p>
                  <div className="relative h-3 w-6 bg-black rounded-full">
                    <div className="absolute w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
              </li>
              <li>
                <button>
                  <GrLanguage />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
