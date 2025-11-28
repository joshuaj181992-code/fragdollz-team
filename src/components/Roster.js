import React, { useState } from "react";
import "./esports-theme.css";

const players = [
  {
    name: "JENNDOTEXE",
    handle: "@JENNDOTEXT",
    role: "Captain",
    img: "/images/jenn.png",
    socials: {
      twitch: "https://www.twitch.tv/jenndotexe",
      x: "https://x.com/jenndotexe",
      kick: "https://kick.com/jenndotexe"
    },
    quote: "It is what it is!!"
  },
  {
    name: "SnipaQueen",
    handle: "@snipaqueen",
    role: "Sniper",
    img: "/images/gg2.png",
    socials: {
      twitch: "https://twitch.tv/snipaqueen",
      x: "https://x.com/snipaqueen",
      instagram: "https://instagram.com/snipaqueen",
      kick: "https://kick.com/snipaqueen"
    },
    quote: "No scope, all style."
  },
  {
    name: "Brittany",
    handle: "@gamerbelle",
    role: "Explosives",
    img: "/images/gg3.png",
    socials: {
      twitch: "https://twitch.tv/gamerbelle",
      x: "https://x.com/gamerbelle",
      instagram: "https://instagram.com/gamerbelle",
      kick: "https://kick.com/gamerbelle"
    },
    quote: "Bringing the heat and the hype!"
  },
  {
    name: "Ashley",
    handle: "@gamerbelle",
    role: "Camper",
    img: "/images/gg4.png",
    socials: {
      twitch: "https://twitch.tv/gamerbelle",
      x: "https://x.com/gamerbelle",
      instagram: "https://instagram.com/gamerbelle"
      // add kick if available: kick: "https://kick.com/..."
    },
    quote: "Bringing the heat and the hype!"
  },
];

export default function Roster() {
  const [flipped, setFlipped] = useState(Array(players.length).fill(false));
  const flipCard = idx => {
    setFlipped(f => f.map((fl, i) => i === idx ? !fl : fl));
  };

  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", padding:"42px 0 0 0"}}>
      {players.map((player, idx) => {
        const socials = player.socials || {};
        return (
          <div
            className={`flip-card${flipped[idx] ? " flip" : ""}`}
            key={idx}
            onClick={() => flipCard(idx)}
            tabIndex={0}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={player.img} alt={player.name} style={{width:"96px", borderRadius:"14px", margin:"17px 0 15px 0", border:"2px solid #fc41b8"}} />
                <h3>{player.name}</h3>
                <div style={{color: "#fc41b8", fontWeight:"bold"}}>{player.role}</div>
                <div>{player.handle}</div>
                <div style={{marginTop: 20, fontSize: "0.95rem", opacity: 0.8}}>Click card for more</div>
              </div>

              <div className="flip-card-back">
                <div style={{marginBottom: 10, fontStyle: "italic", color: "#fc41b8"}}>
                  "{player.quote}"
                </div>


