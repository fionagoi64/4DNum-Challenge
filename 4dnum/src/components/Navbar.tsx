import React, { useState } from "react";
import fourD_logo from "../images/4DNumLogo.png";
import nav_icon from "../images/webDashboard.svg";
import { sidebar } from "../data/sidebar";
import SideMenu from "./SideMenu";
import { Hamburger, Refresh, ScrollToCard } from "./Buttons";
import DatePickerComponent from "./DatePickerComponent";
import { MdOutlineLanguage } from "react-icons/md";
import Switch from "./Switch";

const Navbar = () => {
  const [openSideMenu, setSideMenuOpen] = useState(false);


  const handleOpenSideMenu = () => {
    setSideMenuOpen(!openSideMenu);
  };

  const refreshPage = () => {
    window.location.reload();
  }

  const scrollTo = () => {

  }


  return (
    <div>
      <header className="px-10 fixed w-full top-0 z-10 md:bg-light-grey bg-white md:rounded-none md:shadow-none rounded-b-xl shadow-md">
        {/* web view */}
        <nav className="md:flex md:flex-row hidden items-center justify-between pt-2 pb-4">
          <Hamburger onClick={handleOpenSideMenu} />


          <img src={fourD_logo} alt="" className="rounded-full h-9 xl:hidden" />

          <img src={nav_icon} alt="" className="xl:flex xl:ml-44 md:hidden h-10" />

          <ScrollToCard onClick={scrollTo} />

          <DatePickerComponent />

          <Refresh onClick={refreshPage} />

          <Switch />

          <button>
            <MdOutlineLanguage className="text-2xl" />
          </button>
        </nav>

        {/* mobile view */}
        <nav className="md:hidden block">

        </nav>
      </header>

      {openSideMenu && <section className="fixed z-10">
        <SideMenu sidebar={sidebar} />
      </section>}
    </div>



  );
};

export default Navbar;