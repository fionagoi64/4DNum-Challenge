import React, { useState } from "react";
import dashboard from "../../assets/images/dashboard.svg";
import { Datepicker } from "../buttons/Datepicker";
import { Hamburger } from "../buttons/Hamburger";
import { Logo } from "../buttons/Logo";
import { Theme } from "../buttons/Theme";
import { Refresh } from "../buttons/Refresh";
import { ScrollToCard } from "../buttons/ScrollToCard";
import { Language } from "../buttons/Language";

interface NavProps {
  onSelectDate: (date: Date) => void;
  handleScroll: (ref: HTMLDivElement | null) => void;
  handleTheme: () => void;
  darkMode: boolean;
  handleMenu: () => void;
}

export const Nav: React.FC<NavProps> = ({
  handleScroll,
  darkMode,
  handleTheme,
  handleMenu,
  onSelectDate,
}) => {
  return (
    <>
      <header id="header" className="fixed z-30 xl:z-50 w-full">
        <div className="flex flex-row items-center xl:gap-[99px] 2xl:gap-[178px] w-full">
          <Logo className={"hidden xl:flex ml-5"} />
          {/* web view */}
          <nav className="bg-nav_background hidden md:block px-3 xl:px-5 2xl:px-10 w-full">
            <div className="flex flex-row items-center justify-between py-3">
              <img
                src={dashboard}
                alt=""
                className="hidden xl:inline-block h-10 w-auto"
              />
              <Hamburger handleClick={handleMenu} />
              <Logo className={"xl:hidden"} />
              <ScrollToCard handleScroll={handleScroll} />
              <Datepicker onSelectDate={onSelectDate} />
              <Refresh />
              <Theme darkMode={darkMode} handleTheme={handleTheme} />
              <Language />
            </div>
          </nav>

          {/* mobile view */}
          <nav className="md:hidden w-full">
            <ScrollToCard handleScroll={handleScroll} />
          </nav>
        </div>
      </header>
    </>
  );
};
