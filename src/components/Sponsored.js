import "./esports-theme.css";
import React from "react";

const sponsors = [
  {
    name: "GameFuel",
    img: "/images/sp1.png",
    url: "https://gamefuel.com",
    tagline: "Fueling Champions Everywhere!"
  },
  {
    name: "HyperGear",
    img: "/images/sp2.png",
    url: "https://hypergear.com",
    tagline: "Next Level Gaming Accessories"
  },
  {
    name: "PowerByte",
    img: "/images/sp3.png",
    url: "https://powerbyte.io",
    tagline: "Performance PCs for Pros"
  },
   {
    name: "PowerByte",
    img: "/images/sp4.png",
    url: "https://powerbyte.io",
    tagline: "Performance PCs for Pros"
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