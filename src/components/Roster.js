import React, { useState } from "react";
import "./esports-theme.css";

const players = [
  {
    name: "JENNDOTEXE",
    handle: "@JENNDOTEXE",
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
      // add kick: "https://kick.com/USERNAME" if available
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
            role="button"
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

                <div style={{margin: "7px 0", color: "#fff"}}>
                  <b>Connect:</b><br />

                  {/* Twitch */}
                  {socials.twitch && (
                    <a
                      href={socials.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{marginRight: "14px", color: "#a991e1", textDecoration: "none"}}
                      onClick={(e) => e.stopPropagation()}
                      title="Open Twitch profile"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" style={{marginRight:8}} aria-hidden="true"><path fill="currentColor" d="M4 3h14l-2 4v9h-3v3H9l-3 3V6z"></path></svg>
                      Twitch
                    </a>
                  )}

                  {/* X / Twitter */}
                  {socials.x && (
                    <a
                      href={socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{marginRight: "14px", color: "#5daaff", textDecoration: "none"}}
                      onClick={(e) => e.stopPropagation()}
                      title="Open X profile"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" style={{marginRight:8}} aria-hidden="true"><path fill="currentColor" d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5"></path></svg>
                      X
                    </a>
                  )}

                  {/* Instagram */}
                  {socials.instagram && (
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{marginRight: "14px", color: "#ff66b2", textDecoration: "none"}}
                      onClick={(e) => e.stopPropagation()}
                      title="Open Instagram profile"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" style={{marginRight:8}} aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"></path></svg>
                      Instagram
                    </a>
                  )}

                  {/* Kick */}
                  {socials.kick && (
                    <a
                      href={socials.kick}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginRight: "14px",
                        color: "#fff",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 10px",
                        borderRadius: 8,
                        background: "linear-gradient(135deg,#ff6a00 0%,#ff2d95 100%)"
                      }}
                      onClick={(e) => e.stopPropagation()}
                      title="Open Kick profile"
                    >
                      {/* Inline Kick logo (simple badge) */}
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{flexShrink:0}}>
                        <circle cx="12" cy="12" r="11" fill="#fff" opacity="0.08"/>
                        <path d="M7 17V7h3.5l2.5 5 2.5-5H19v10h-3.5l-2.5-5-2.5 5H7z" fill="#fff"/>
                      </svg>
                      Kick
                    </a>
                  )}
                </div>

                <div style={{fontSize:"0.78rem", color:"#ccc", marginTop:"12px"}}>(Click to flip back)</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}