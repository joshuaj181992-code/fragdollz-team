import "./esports-theme.css";
import React from "react";

const sponsors = [
  {
    name: "Name Less",
    img: "/images/sp1.png",
    url: "https://gamefuel.com",
    tagline: "Fueling Champions Everywhere!"
  },
  {
    name: "TrUgamers",
    img: "/images/sp2.png",
    url: "https://www.trugamer.pro/",
    tagline: "Next Level Gaming News hub"
  },
  {
    name: "Chariety Gamers",
    img: "/images/sp3.png",
    url: "https://powerbyte.io",
    tagline: "Performance PCs for Pros"
  },
  {
  name: "DSS",
    img: "/images/sp10.png",
  url: "https://www.tiktok.com/@dragonshellshinobi?_r=1&_t=ZP-91b9cC5sXtf", // <-- put the real DSS link here
  tagline: "Dragon Shield Shinbo"
},
   {
    name: "Battle of the Orgs",
    img: "/images/sp4.png",
    url: "https://powerbyte.io",
    tagline: "Performance PCs for Pros"
  },
  {
  name: "DSS",
    img: "/images/sp10.png",
  url: "https://www.tiktok.com/@dragonshellshinobi?_r=1&_t=ZP-91b9cC5sXtf", // <-- put the real DSS link here
  tagline: "Dragon Shield Shinbo"
}
  
];

export default function Sponsored() {
  return (
    <div className="sponsors-page esports-bg" style={{minHeight:"100vh", paddingTop: "32px"}}>
      <h2 className="esports-title" style={{textAlign:"center", marginBottom:"18px"}}>Sponsored By</h2>
      <div className="sponsor-card-list">
        {sponsors.map((sponsor, idx) => (
          <a
            className="sponsor-card"
            key={idx}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.name}
          >
            <div className="sponsor-logo-bg"></div>
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <div className="sponsor-name">{sponsor.name}</div>
            <div className="sponsor-tagline">{sponsor.tagline}</div>
          </a>
        ))}
      </div>
    </div>
  );
}