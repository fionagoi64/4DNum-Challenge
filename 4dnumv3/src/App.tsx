import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";
import "react-datepicker/dist/react-datepicker.css";
import { Jackpot } from "./modules/jackpot/Jackpot";
import { FourD } from "./modules/dashboard/Dashboard";
import { ThemeProvider } from "./context/Theme";
import { LanguageProvider } from "./context/Language";
import { LuckyBook } from "./modules/lucky-book/LuckyBook";
import { SpecialDrawDate } from "./modules/special-draw-date/SpecialDrawDate";
import { NumberAnalysis } from "./modules/number-analysis/NumberAnalysis";
import { SpinMyLuck } from "./modules/spin-my-luck/SpinMyLuck";
import { HotNumber } from "./modules/hot-number/HotNumber";
import { TuaPekKongQian } from "./components/dictionary/TuaPekKongQian";
import { TuaPekKongWan } from "./components/dictionary/TuaPekKongWan";
import { GuanYinMa } from "./components/dictionary/GuanYinMa";

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
    <LanguageProvider>
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
                  <Jackpot
                    handleMenu={handleOpen}
                    selectedDate={selectedDate}
                  />
                }
              />
              <Route path="special-date" element={<SpecialDrawDate />} />
              <Route path="number-analysis" element={<NumberAnalysis />} />
              <Route path="spin-my-luck" element={<SpinMyLuck />} />
              <Route path="hot-dddd-num" element={<HotNumber />} />
              <Route path="lucky-book" element={<LuckyBook />} />
              <Route
                path="lucky-book-category-list"
                element={<TuaPekKongWan />}
              />
              <Route
                path="lucky-book-category-list#gzt"
                element={<GuanYinMa />}
              />
              <Route
                path="lucky-book-category-list#qzt"
                element={<TuaPekKongQian />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
