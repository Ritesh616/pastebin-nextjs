
"use client";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  async function submit() {
    const res = await fetch("/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    setLink(data.url);
  }

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      boxSizing: "border-box",
      background: "#f5f5f5",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your text here..."
        style={{
          width: "100%",
          padding: 12,
          fontSize: 14,
          borderRadius: 6,
          border: "1px solid #ccc",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={submit}
        style={{
          marginTop: 16,
          width: "100%",
          padding: 12,
          fontSize: 16,
          borderRadius: 6,
          border: "none",
          backgroundColor: "#0070f3",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Create Paste
      </button>
      {link && (
        <p
          style={{
            marginTop: 16,
            wordBreak: "break-word",
            fontSize: 14,
          }}
        >
          Link: <a href={link} style={{ color: "#0070f3" }}>{link}</a>
          
        </p>
      )}
    </div>
  </div>
);
}