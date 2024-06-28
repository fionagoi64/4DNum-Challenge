import React,{useState,useEffect} from "react";
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxHamburgerMenu } from "react-icons/rx";
import fourD_logo from "../img/logo.png";
import logo_text from "../img/4dnumText.svg";
import nav_icon from "../img/dashboard-nav.svg";
import branch_logos from "../img/magnum-small.svg";
import { IoCalendarOutline } from "react-icons/io5";
import { GrRefresh } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Header = () => {

  return (
    <header className="fixed w-full top-0 z-10 md:bg-light-grey bg-white md:rounded-none md:shadow-none rounded-b-xl shadow-md">
      {/* web view */}
      <nav className="md:flex hidden gap-3 items-center justify-between pt-2 pb-4 px-8">
        <button className="xl:hidden md:flex">
        <RxHamburgerMenu className="text-xl " />
        </button>
        
        <div className="flex gap-3 ">
          <img src={fourD_logo} alt="" className="rounded-full w-9" />
          <img src={logo_text} alt="" className="h-auto w-16 xl:w-20 lg:flex md:hidden" />
        </div>

        <img src={nav_icon} alt="" className="xl:flex md:hidden" />

        <div className="bg-white rounded-xl shadow-md">
          <div>
            <ul className="flex gap-2 items-center p-3">
              <li>
                <a href="/">
                  <img src={branch_logos} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button className="bg-white p-3 rounded-xl shadow-md text-dark-grey hover:text-blue-indigo hover:border-[0.5px] hover:border-blue-indigo">
        {/* <DatePicker onChange={handleDateChange}/> */}
          <div className="flex gap-3 items-center ">
            <IoCalendarOutline className="text-xl" />
            <h1 className="font-bold text-sm text-nowrap ">
              2024-06-25
            </h1>
          </div>
        </button>

        <button className="bg-blue-indigo rounded-full p-2">
          <GrRefresh className="text-white bg-blue-indigo text-xl" />
        </button>

        <div className="flex gap-3 items-center ">
          <MdLightMode className="text-xl text-dark-grey" />
          <h1 className="text-sm">Light Mode</h1>
        </div>

        <button>
          <GrLanguage className="text-xl" />
        </button>
      </nav>

      {/* mobile view */}
      <nav className="flex md:hidden ">
        <div>
          <ul className="flex gap-2 items-center p-3">
            <li>
              <a href="/">
                <img src={branch_logos} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
