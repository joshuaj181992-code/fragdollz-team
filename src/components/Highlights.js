import React from "react";
export default function Highlights() {
  return (
    <div style={{
      minHeight: "70vh", padding: "2em 0",
      display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <h2 style={{
        color: "var(--accent)", fontFamily: "Orbitron,Arial", fontSize: 32, marginBottom: 24
      }}>Team Highlights</h2>
      <div style={{
        textAlign: "center", marginTop: 12, borderRadius: 12,
        boxShadow: "0 0 36px var(--primary)",
        overflow: "hidden",
        background: "#000"
      }}>
        <iframe
          width="440"
          height="248"
          src="https://www.youtube.com/embed/P4QqTxcoNUw"
          title="Frag Dollz Highlights"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}