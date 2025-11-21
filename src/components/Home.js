import "./esports-theme.css";
import React from "react";

export default function Home() {
  return (
    <div style={{
      minHeight: "78vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      paddingTop: "1.5em"
    }}>
      <img
        src="/images/fragdollz-logo.png"
        alt="Frag Dollz Logo"
        style={{
          width: 200, height: 200, marginBottom: 28,
          borderRadius: 100, border: "6px solid var(--primary)",
          boxShadow: "0 0 68px var(--primary), 0 0 4px #341b47"
        }}
        className="float"
      />
      <h1 style={{
        color: "var(--primary)",
        textShadow: "0 3px 24px var(--accent), 1px 1px 0 var(--accent)",
        fontFamily: "Orbitron,Arial,sans-serif",
        fontSize: 54,
        margin: 0, marginBottom: 5
      }}>
        FragDollz
      </h1>
      <p style={{
        color: "var(--accent)",
        fontSize: 22,
        letterSpacing: ".14em",
        margin: "4px 0 28px 0",
        fontWeight: 700
      }}>
        Next-gen Gamer Girl Power. <span style={{ color: "var(--primary)" }}>Win the Crowd.</span>
      </p>
      {/* Animated controller */}
      
<div style={{
  marginTop: 12, marginBottom: 6,
  filter: "drop-shadow(0 0 18px var(--primary))",
  animation: "floating 2.1s infinite"
}}>
  <img src="/images/Controller.png" alt="Controller" width={200} height={200} />
</div>
      <span style={{
        background: "rgba(250,10,187,0.09)",
        padding: "8px 25px",
        borderRadius: 24,
        letterSpacing: "1.6px",
        color: "var(--primary)",
        fontWeight: "bold",
        marginTop: 36,
        textShadow: "0 2px 8px #fc4ace88"
        
      }}>
        #FRAGDOLLZ
      </span>
      <style>{`
        @keyframes floating {
          0%{transform:translateY(0);}
          60%{transform:translateY(-16px);}
          100%{transform:translateY(0);}
        }
      `}</style>
    </div>
  );
}