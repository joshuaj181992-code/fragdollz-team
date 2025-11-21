import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Roster from "./components/Roster";
import Highlights from "./components/Highlights";
import Social from "./components/Social";
import Sponsored from "./components/Sponsored";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/social" element={<Social />} />
        <Route path="/sponsored" element={<Sponsored />} />
      </Routes>
    </Router>
  );
}

export default App;