import React, { useState, useEffect } from "react";

export function EsportsNewsWidget() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // Example: using RSS2JSON for women-in-esports news from esports.gg
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://esports.gg/women-in-esports/feed/")
      .then(res => res.json())
      .then(data => {
        if (data && data.items) setNews(data.items.slice(0, 4));
      });
  }, []);
  return (
    <div style={{
      maxWidth: 540,
      margin: "30px auto",
      padding: "20px",
      background: "#24133e",
      borderRadius: "16px",
      boxShadow: "0 0 24px #fc41b885"
    }}>
      <div style={{
        color: "#fc41b8",
        fontFamily: "Orbitron,Arial,sans-serif",
        fontWeight: "bold",
        marginBottom: "12px",
        fontSize: "1.3rem"
      }}>
        📰 Latest Women in Esports News
      </div>
      {news.length === 0 && <div style={{ color: "#aaa" }}>Loading news…</div>}
      {news.map((n, idx) => (
        <div key={idx} style={{ marginBottom: 12 }}>
          <a href={n.link} target="_blank" rel="noopener noreferrer" style={{color:"#5adaff", fontWeight:"bold", fontSize:"1.1rem"}}>
            {n.title}
          </a>
          <div style={{ color: "#ccc", fontSize:"0.94rem" }}>{n.pubDate && n.pubDate.substring(0, 10)}</div>
        </div>
      ))}
    </div>
  );
}