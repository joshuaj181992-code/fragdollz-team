import "./esports-theme.css";
import React from "react";
const players = [
  { name: "Hexa", role: "Captain", img: "/images/fd2.png", bio: "GL, entry aimer, fearless in clutch." },
  { name: "Nova", role: "Sniper", img: "/images/fd2.png", bio: "Scope queen with lightning reflexes." },
  { name: "Byte", role: "Support", img: "/images/fd2.png", bio: "Brains, strats, and big vibes." },
  { name: "Echo", role: "Entry", img: "/images/fd2.png", bio: "Point-break plays, unpredictable moves." }
];


export default function Roster() {
  const players = [
    {
      name: "GamerBelle",
      handle: "@gamerbelle",
      role: "Captain",
      img: "/images/teammate1.png",
      socials: {
        twitch: "https://twitch.tv/gamerbelle",
        twitter: "https://twitter.com/gamerbelle",
        instagram: "https://instagram.com/gamerbelle"
      },
      quote: "Bringing the heat and the hype!"
    },
    {
      name: "SnipaQueen",
      handle: "@snipaqueen",
      role: "Sniper",
      img: "/images/teammate2.png",
      socials: {
        twitch: "https://twitch.tv/snipaqueen",
        twitter: "https://twitter.com/snipaqueen",
        instagram: "https://instagram.com/snipaqueen"
      },
      quote: "No scope, all style."
    }
    // Add more teammates here!
  ];

  return (
    <div className="esports-roster">
      {players.map((player, idx) => (
        <div className="player-card" key={idx}>
          <div className="player-avatar-wrapper">
            <span className="player-avatar-bg"></span>
            <img src={player.img} alt={player.name} />
          </div>
          <h3>{player.name}</h3>
          <div className="player-handle">{player.handle}</div>
          <div className="player-role">{player.role}</div>
          <div style={{margin:"8px 0 0 0", color:"#dadada"}}>
            {player.quote}
          </div>
          <div className="player-socials">
            <a href={player.socials.twitch} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitch"></i>
            </a>
            <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href={player.socials.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}