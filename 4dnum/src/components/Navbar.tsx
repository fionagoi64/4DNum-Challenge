import React, { useState } from "react";
import { extraData } from "../data/extraData";
import { BaseURL } from "../data/apiData";
import { publicImage } from "../data/apiData";
import fourD_logo from "../images/4DNumLogo.png";
import nav_icon from "../images/webDashboard.svg";
import refresh from "../images/webRefresh.svg";
import { MdLightMode } from "react-icons/md";
import { sidebar } from "../data/sidebar";
import SideMenu from "./SideMenu";
import Hamburger from "./Buttons";

const Navbar = () => {
  const [openSideMenu, setSideMenuOpen] = useState(false);

  const handleOpenSideMenu = () => {
    setSideMenuOpen(!openSideMenu);
  };

  return (
    <div>
      <header className="fixed w-full top-0 z-10 md:bg-light-grey bg-white md:rounded-none md:shadow-none rounded-b-xl shadow-md">
        {/* web view */}
        <nav className="md:flex md:flex-row hidden gap-5 items-center justify-between pt-2 pb-4 px-8">
          <Hamburger onClick={handleOpenSideMenu} />


          <img src={fourD_logo} alt="" className="rounded-full w-9" />


          <img src={nav_icon} alt="" className="xl:flex md:hidden" />

          <div className="bg-white rounded-3xl shadow-md">
            <ul className="flex gap-2 items-center p-2">
              {extraData.map((logos, logoindex) => {
                console.log(extraData)
                return (
                  <li>
                    <a href="/">
                      <img className="h-9" src={`${BaseURL}${publicImage}${logos.img_path}`} alt="" />
                    </a>
                  </li>
                )
              })
              }
            </ul>
          </div>

          <button className="bg-white p-3 rounded-xl shadow-md text-dark-grey hover:text-blue-indigo hover:border-[0.5px] hover:border-blue-indigo">
            {/* <DatePicker onChange={handleDateChange}/> */}
            <div className="flex gap-3 items-center ">

              <h1 className="font-bold text-sm text-nowrap ">
                2024-06-25
              </h1>
            </div>
          </button>

          <button>
            <img src={refresh} alt="" />
          </button>

          <div className="flex gap-3 items-center ">
            <MdLightMode className="text-xl" />
            <h1 className="text-sm">Light Mode</h1>
          </div>

          <button>
            <img src="" alt="" />
          </button>
        </nav>

        {/* mobile view */}
        <nav className="md:hidden block">
          <ul className="flex items-center p-2 justify-between">
            {extraData.map((logos, logoindex) => {
              console.log(extraData)
              return (
                <li>
                  <a href="/">
                    <img className="h-9" src={`${BaseURL}${publicImage}${logos.img_path}`} alt="" />
                  </a>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </header>

      {openSideMenu && <section className="fixed z-10">
        <SideMenu sidebar={sidebar} />
      </section>}
    </div>



  );
};

export default Navbar;