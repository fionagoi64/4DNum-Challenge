import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Home } from "./components/modules/home/Home";
import { Jackpot } from "./components/modules/jackpot/Jackpot";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  //#region variables
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  //#endregion

  //#region command
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (ref) {
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
      <BrowserRouter>
        <Nav
          handleMenu={handleOpen}
          handleScroll={handleScroll}
          handleTheme={handleTheme}
          darkMode={darkMode}
          onSelectDate={handleDateSelect}
        />
        {/* web view */}
        <Sidebar
          handleMenu={handleOpen}
          handleClose={handleClose}
          isShow="hidden xl:block"
          handleTheme={handleTheme}
          darkMode={darkMode}
        />
        {/* mobile view */}
        <Sidebar
          handleMenu={handleOpen}
          handleClose={handleClose}
          isShow={`${isOpen ? "block" : "hidden"}`}
          isTransition={`
            ${isOpen ? "ml-0" : "-ml-60"}`}
          handleTheme={handleTheme}
          darkMode={darkMode}
        />
        <SpecialDraw />
        <Routes>
          <Route
            index
            element={
              <Home handleMenu={handleOpen} selectedDate={selectedDate} />
            }
          />
          <Route
            path="jackpot"
            element={
              <Jackpot handleMenu={handleOpen} selectedDate={selectedDate} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
