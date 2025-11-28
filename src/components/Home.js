import React from "react";
import "./esports-theme.css";
import { EsportsNewsWidget } from "./EsportsNewsWidget";

export default function Home() {
  return (
    <div style={{
      position: "relative",
      minHeight: "88vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Animated Cyber BG overlays */}
      <div className="hero-cyber-bg hero-cyber-bg-1" />
      <div className="hero-cyber-bg hero-cyber-bg-2" />
      <div className="hero-pixel-overlay"></div>

      {/* Hero logo — NO inline width, CSS will control size */}
      <div className="hero-logo-wrap">
     <div className="hero-logo-wrap">
  <img
    src="/images/logooo.svg"
    alt="FragDollz Mascot"
    className="hero-logo"
  />
</div>

      <h1 className="esports-title" style={{ zIndex: 5, marginBottom: 0 }}>
        FragDollz
      </h1>

      <div
        style={{
          fontFamily: 'Orbitron, Arial, sans-serif',
          fontSize: "1.6rem",
          color: "#fff",
          marginBottom: "13px",
          marginTop: "2px",
          textShadow: "0 2px 12px #fc41b899",
          zIndex: 5
        }}
      >
        Next-gen Gamer Girl Power. Win the Crowd.
      </div>

      {/* Animated CTA Button */}
      <a
        href="https://twitch.tv/fragdollz"
        className="hero-cta-btn"
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 5 }}
      >
        WATCH US LIVE
      </a>

      {/* Social badges */}
      <div className="hero-socials" style={{ zIndex: 5 }}>
        <a href="https://twitch.tv/fragdollz" className="hero-social-btn" target="_blank" rel="noopener noreferrer" title="Twitch">
          <i className="fa-brands fa-twitch"></i>
        </a>
        <a href="https://twitter.com/fragdollzteam" className="hero-social-btn" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/@fragdollzteam" className="hero-social-btn" target="_blank" rel="noopener noreferrer" title="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://discord.gg/example" className="hero-social-btn" target="_blank" rel="noopener noreferrer" title="Discord">
          <i className="fa-brands fa-discord"></i>
        </a>
      </div>

      {/* Esports News Widget */}
      <EsportsNewsWidget />
    </div>
  );
}