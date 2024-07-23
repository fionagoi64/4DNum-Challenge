import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Home } from "./components/pages/Home";
import { Jackpot } from "./components/pages/Jackpot";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";

function App() {
  //#region variables
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  //#endregion

  //#region command
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (ref) {
      // ref.scrollIntoView({ behavior: "smooth", block: "nearest" });
      var headerOffset = 80;
      var elementPosition = ref.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      const savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  //#endregion

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Nav
        handleMenu={handleOpen}
        handleScroll={handleScroll}
        handleTheme={handleTheme}
        darkMode={darkMode}
      />
      {/* web view */}
      <Sidebar handleClose={handleClose} isShow="hidden xl:block" />
      {/* mobile view */}
      <Sidebar
        handleClose={handleClose}
        isShow={`${isOpen ? "block" : "hidden"}`}
        isTransition={`transition-all duration-700 
          ${isOpen ? "ml-0" : "-ml-60"}`}
      />
      <SpecialDraw />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home handleMenu={handleOpen} />} />
          <Route path="jackpot" element={<Jackpot handleMenu={handleOpen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
