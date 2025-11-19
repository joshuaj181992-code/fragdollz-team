import React from "react";
export default function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: "1.4em 0",
      marginTop: "3em",
      background: "var(--dark-bg)",
      color: "#b47dbc",
      fontSize: 15,
      letterSpacing: "0.11em"
    }}>
      &copy; {new Date().getFullYear()} Frag Dollz | <span style={{ color: "var(--primary)" }}>Gamer Girl Power</span>
    </footer>
  );
}