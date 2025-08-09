import React from "react";

export default function SpotifyCard() {
  return (
    <div className="preview-card spotify">
      <h3>Spotify</h3>
      <p>Here's what I've been listening to lately.</p>

    <div
        style={{
            position: "relative",
            height: "400px", // taller than default
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(255, 69, 0, 0.4)",
            marginBottom: "1rem",
        }}
    >
        <iframe
            src="https://open.spotify.com/embed/playlist/2AnRta8neL1pF7Z5cXXXfw?utm_source=generator"
            title="Spotify Player"
            allow="encrypted-media"
            allowFullScreen
            frameBorder="0"
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            }}
        ></iframe>
    </div>


      <a
        href="https://open.spotify.com/user/lilkwhit"
        target="_blank"
        rel="noopener noreferrer"
        className="preview-link"
      >
        Listen on Spotify
      </a>
    </div>
  );
}
