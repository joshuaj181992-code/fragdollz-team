import React from "react";
import "./esports-theme.css";
import { EsportsNewsWidget } from "./EsportsNewsWidget";

export default function Home() {
  return (
    <div className="home-viewport">
      {/* Animated Cyber BG overlays */}
      <div className="hero-cyber-bg hero-cyber-bg-1" />
      <div className="hero-cyber-bg hero-cyber-bg-2" />
      <div className="hero-pixel-overlay"></div>

      <div className="hero-inner">
        {/* Hero logo */}
        <div className="hero-logo-wrap">
          <img
            src="/images/logooo.png"
            alt="FragDollz Mascot"
            className="hero-logo"
          />
        </div>

        <h1 className="esports-title">FragDollz</h1>

        <div className="esports-subtitle">
          Next-gen Gamer Girl Power. Win the Crowd.
        </div>

        {/* Animated CTA Button */}
        <a
          href="https://twitch.tv/fragdollz"
          className="hero-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          WATCH US LIVE
        </a>

        {/* Social badges */}
        <div className="hero-socials">
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
    </div>
  );
}