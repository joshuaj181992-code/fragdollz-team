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
  const loc = useLocation();
  return (
    <nav style={nav}>
      <Link to="/" style={{ ...link, background: isActive("/", loc) ? "var(--accent)" : "none", color: isActive("/", loc) ? "#fff" : "var(--primary)" }}>Home</Link>
      <Link to="/roster" style={{ ...link, background: isActive("/roster", loc) ? "var(--accent)" : "none", color: isActive("/roster", loc) ? "#fff" : "var(--primary)" }}>Roster</Link>
      <Link to="/highlights" style={{ ...link, background: isActive("/highlights", loc) ? "var(--accent)" : "none", color: isActive("/highlights", loc) ? "#fff" : "var(--primary)" }}>Highlights</Link>
      <Link to="/social" style={{ ...link, background: isActive("/social", loc) ? "var(--accent)" : "none", color: isActive("/social", loc) ? "#fff" : "var(--primary)" }}>Social</Link>
    </nav>
  );
}