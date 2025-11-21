import React from "react";
import { Link, useLocation } from "react-router-dom";

const nav = {
  display: "flex", justifyContent: "center", alignItems: "center",
  gap: "2.3em", padding: ".9em 0 1em 0",
  background: "rgba(40,29,57,0.85)",
  fontFamily: "'Orbitron', Arial, sans-serif",
  boxShadow: "0 4px 30px #f0047f18"
};
const link = {
  fontSize: "1.18rem", fontWeight: 700, textTransform: "uppercase",
  letterSpacing: ".16em", textDecoration: "none",
  color: "var(--primary)",
  padding: ".25em .7em",
  borderRadius: "10px",
  transition: "background 0.18s"
};
function isActive(path, loc) {
  return loc.pathname === path;
}


export default function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/roster">ROSTER</Link>
      <Link to="/highlights">HIGHLIGHTS</Link>
      <Link to="/social">SOCIAL</Link>
      <Link to="/sponsored">SPONSORS</Link>
    </nav>
  );
}