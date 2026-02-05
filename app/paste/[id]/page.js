"use client";

import { useEffect, useState } from "react";

export default function PastePage({ params }) {
  const { id } = params;
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPaste() {
      try {
        const res = await fetch(`/api/paste/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setContent(data.content);
      } catch {
        setError("Paste not found or expired");
      }
    }

    loadPaste();
  }, [id]);

  if (error) {
    return <p style={{ padding: 20, textAlign: "center" }}>{error}</p>;
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontSize: 16,
        }}
      >
        {content}
      </pre>
    </div>
  );
}
