import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Home } from "./components/pages/Home";
import { Jackpot } from "./components/pages/Jackpot";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Nav
        handleMenu={handleOpen}
        handleScroll={handleScroll}
        handleTheme={handleTheme}
        darkMode={darkMode}
      />
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
