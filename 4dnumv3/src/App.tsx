import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/menu/Nav";
import Home from "./pages/Home";
import Jackpot from "./pages/Jackpot";
import Sidebar from "./components/menu/Sidebar";
import SpecialDraw from "./components/menu/SpecialDraw";

function App() {
  return (
    <>
      <Nav />
      <Sidebar />
      <SpecialDraw />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="jackpot" element={<Jackpot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
