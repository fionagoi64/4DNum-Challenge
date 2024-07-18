import React from "react";
import dashboard from "../../assets/images/dashboard.svg";
import Datepicker from "../buttons/Datepicker";
import Hamburger from "../buttons/Hamburger";
import { Logo } from "../buttons/Logo";
import Theme from "../buttons/Theme";
import Refresh from "../buttons/Refresh";
import ScrollToCard from "../buttons/ScrollToCard";
import Language from "../buttons/Language";

const Nav = () => {
  return (
    <>
      <header id="header" className="fixed z-50 w-full">
        <div className="flex flex-row items-center xl:gap-[99px] w-full">
          <Logo className={"hidden xl:flex ml-5"} />
          {/* web view */}
          <nav className="bg-navbg hidden md:block px-3 w-full">
            <div className="flex flex-row items-center justify-between py-3">
              <img
                src={dashboard}
                alt=""
                className="hidden xl:inline-block h-9 w-auto pl-3"
              />
              <Hamburger />
              <Logo className={"xl:hidden"} />
              <ScrollToCard />
              <Datepicker />
              <Refresh />
              <Theme />
              <Language />
            </div>
          </nav>

          {/* mobile view */}
          <nav className="md:hidden w-full">
            <ScrollToCard />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
