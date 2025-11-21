
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Roster from "./components/Roster";
import Social from "./components/Social";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : "light"}>
      <BrowserRouter>
        <DarkModeToggle dark={dark} setDark={setDark} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/social" element={<Social />} />
          <Route path="/highlights" element={<Highlights />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}