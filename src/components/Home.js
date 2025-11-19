import React from "react";
import "./esports-theme.css";

export default function Home() {
  return (
    <div className="esports-bg">
      <img
        src="/images/fragdollz-logo.png"
        alt="Frag Dollz Logo"
        className="esports-logo"
      />
      <h1 className="esports-title">FragDollz</h1>
      <p className="esports-tagline">
        Next-gen Gamer Girl Power. <span>Win the Crowd.</span>
      </p>
      <div className="controller-float">
        <img src="/images/controller.png" alt="Controller" width={48} height={48} />
      </div>
      <span className="frag-hashtag">
        #FRAGDOLLZ
      </span>
    </div>
  );
}