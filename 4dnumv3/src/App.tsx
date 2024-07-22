import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/menu/Nav";
import { Home } from "./components/pages/Home";
import { Jackpot } from "./components/pages/Jackpot";
import { Sidebar } from "./components/menu/Sidebar";
import { SpecialDraw } from "./components/menu/SpecialDraw";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false); // Close sidebar
  };

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Nav handleMenu={handleOpen} handleScroll={handleScroll} />
      <Sidebar handleClose={handleClose} isOpen={isOpen} />
      <SpecialDraw />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home handleMenu={handleOpen} />} />
          <Route path="jackpot" element={<Jackpot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
