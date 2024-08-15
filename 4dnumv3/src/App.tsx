import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";
import "react-datepicker/dist/react-datepicker.css";
import { Jackpot } from "./modules/jackpot/Jackpot";
import { FourD } from "./modules/four-d/FourD";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  //#region variables
  const [isOpen, setIsOpen] = useState(false);
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

  //#endregion
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <Nav
            handleMenu={handleOpen}
            handleScroll={handleScroll}
            onSelectDate={handleDateSelect}
          />
          {/* web view */}
          <Sidebar
            handleMenu={handleOpen}
            handleClose={handleClose}
            isShow="hidden xl:block"
          />
          {/* mobile view */}
          <Sidebar
            handleMenu={handleOpen}
            handleClose={handleClose}
            isShow={`${isOpen ? "block" : "hidden"}`}
            isTransition={`
            ${isOpen ? "ml-0" : "-ml-60"}`}
          />
          <SpecialDraw />
          <Routes>
            <Route
              index
              element={
                <FourD handleMenu={handleOpen} selectedDate={selectedDate} />
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
    </ThemeProvider>
  );
}

export default App;
