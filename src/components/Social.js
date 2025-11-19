import React from "react";
const socials = [
  { label: "Twitter", icon: "fab fa-twitter", color: "#1da1f2", url: "https://twitter.com/FragDollz" },
  { label: "Twitch", icon: "fab fa-twitch", color: "#9146FF", url: "https://twitch.tv/FragDollz" },
  { label: "TikTok", icon: "fab fa-tiktok", color: "#ff1fb3", url: "https://tiktok.com/@FragDollz" },
  { label: "YouTube", icon: "fab fa-youtube", color: "#ff4447", url: "https://youtube.com/FragDollz" },
];
export default function Social() {
  return (
    <div style={{
      minHeight: "68vh", padding: "2em 0",
      display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <h2 style={{
        color: "var(--accent)", fontSize: 32, fontFamily: "Orbitron, Arial", marginBottom: 22
      }}>
        Connect with Frag Dollz
      </h2>
      <div style={{
        display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginTop: 0, width: "100%"
      }}>
        {socials.map(s => (
          <a key={s.label}
            href={s.url}
            style={{
              textDecoration: "none",
              color: s.color,
              background: "var(--card-bg)",
              border: `2.8px solid ${s.color}`,
              borderRadius: 12,
              width: 178,
              height: 90,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 27,
              fontWeight: 700,
              margin: "1em 0",
              boxShadow: "0 0 20px " + s.color + "55",
              transition: "transform .16s"
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={s.icon} style={{ marginRight: 15 }} /> {s.label}
          </a>
        ))}
      </div>
      <p style={{ color: "var(--highlight)", fontSize: 15, marginTop: 36 }}>
        Find more content, updates and behind the scenes—everywhere!
      </p>
    </div>
  );
}