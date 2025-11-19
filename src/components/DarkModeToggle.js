import React from "react";

export default function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      aria-label="Toggle dark mode"
      style={{
        position: "fixed", right: 18, top: 14, zIndex: 99,
        background: dark ? "var(--accent)" : "var(--highlight)",
        color: dark ? "#fff" : "#333",
        border: "none",
        borderRadius: "50%",
        width: 46,
        height: 46,
        boxShadow: "0 2px 8px #44107a44",
        cursor: "pointer",
        fontSize: "1.4em",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}
      onClick={() => setDark(d => !d)}
    >
      {dark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
    </button>
  );
}