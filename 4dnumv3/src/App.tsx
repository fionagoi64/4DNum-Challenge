import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Jackpot from "./pages/Jackpot";
import Sidebar from "./components/Sidebar";
import SpecialDraw from "./components/SpecialDraw";

function App() {
  return (
    <>
      <Nav />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="jackpot" element={<Jackpot />} />
        </Routes>
      </BrowserRouter>
      <SpecialDraw />
    </>
  );
}

export default App;
