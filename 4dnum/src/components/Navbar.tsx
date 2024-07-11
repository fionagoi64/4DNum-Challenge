import React, { useState } from "react";
import fourD_logo from "../images/4DNumLogo.png";
import nav_icon from "../images/webDashboard.svg";
import { sidebar } from "../data/sidebar";
import SideMenu from "./SideMenu";
import { Hamburger, Refresh } from "./Buttons";
import ScrollToCard from "./ScrollToCard";
import DatePickerComponent from "./DatePickerComponent";
import { MdOutlineLanguage } from "react-icons/md";
import Switch from "./Switch";

interface NavbarProps {
  onSelectDate: (date: Date) => void;
  toggleDisplayMode: () => void;
  darkMode: boolean;
  scrollToCard: (ref: HTMLDivElement | null) => void; // Define scrollToCard prop type
}

const Navbar: React.FC<NavbarProps> = ({ onSelectDate, toggleDisplayMode, darkMode, scrollToCard }) => {
  const [openSideMenu, setSideMenuOpen] = useState(false);


  const handleOpenSideMenu = () => {
    setSideMenuOpen(!openSideMenu);
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div >
      <header className="px-10 fixed w-full top-0 z-10 md-bg md:rounded-none md:shadow-none rounded-b-xl shadow-md">
        {/* web view */}
        <nav className="md:flex md:flex-row hidden items-center justify-between pt-2 pb-4">
          <Hamburger onClick={handleOpenSideMenu} />

          <img src={fourD_logo} alt="" className="rounded-full h-9 xl:hidden" />

          <img src={nav_icon} alt="" className="xl:flex xl:ml-44 md:hidden h-10" />

          <ScrollToCard scrollToRef={scrollToCard} />

          <DatePickerComponent onSelectDate={onSelectDate} />

          <Refresh onClick={refreshPage} />

          <Switch darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />

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