import React from "react";
const players = [
  { name: "Hexa", role: "Captain", img: "/images/fd2.png", bio: "GL, entry aimer, fearless in clutch." },
  { name: "Nova", role: "Sniper", img: "/images/fd2.png", bio: "Scope queen with lightning reflexes." },
  { name: "Byte", role: "Support", img: "/images/fd2.png", bio: "Brains, strats, and big vibes." },
  { name: "Echo", role: "Entry", img: "/images/fd2.png", bio: "Point-break plays, unpredictable moves." }
];

export default function Roster() {
  return (
    <div style={{
      minHeight: "80vh", padding: "2.5em 0 2em 0",
      display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <h2 style={{
        color: "var(--accent)", fontFamily: "Orbitron,Arial,sans-serif", fontSize: 34, letterSpacing: ".11em"
      }}>Team Roster</h2>
      <div style={{
        display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 38, marginTop: 24, width: "100%"
      }}>
        {players.map((p) => (
          <div key={p.name}
            style={{
              background: "var(--card-bg)",
              border: "3px solid var(--card-border)",
              borderRadius: 18, width: 210, minHeight: 330,
              boxShadow: "var(--shadow)", marginBottom: 26, textAlign: "center", padding: "22px 12px 14px 12px",
              position: "relative", transition: "transform .22s"
            }}
            className="float"
          >
            <img src={p.img} alt={p.name}
              style={{
                borderRadius: "52%",
                border: "3px solid var(--primary)",
                width: 94, height: 94, marginBottom: 10, objectFit: "cover"
              }}
            />
            <div style={{ fontSize: 21, fontWeight: "bold", color: "var(--primary)", marginBottom: 2 }}>{p.name}</div>
            <div style={{ color: "var(--highlight)", fontSize: 15, fontWeight: 600, marginBottom: 7 }}>{p.role}</div>
            <p style={{
              color: "var(--accent)",
              minHeight: 32, fontSize: 14,
              marginBottom: 5
            }}>{p.bio}</p>
            <i className="fas fa-gamepad" style={{
              color: "var(--primary)", fontSize: 26, position: "absolute", right: 15, bottom: 15, opacity: .5
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}