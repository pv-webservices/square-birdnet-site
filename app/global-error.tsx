"use client";

import { useEffect } from "react";
import { contact, whatsappLink } from "@/data/site";

/**
 * Last-resort boundary for errors in the root layout itself. It replaces the
 * whole document, so it cannot rely on globals.css — styles are inline.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-IN">
      <head>
        <title>Something went wrong | SQUARE</title>
        <meta name="robots" content="noindex" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          color: "#0f2942",
          background: "#f6fafd",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".14em", color: "#0d68ae", margin: 0 }}>
            SQUARE — BIRD NET &amp; INVISIBLE GRILL
          </p>
          <h1 style={{ fontSize: 30, margin: "14px 0 10px", color: "#07365f" }}>Something went wrong.</h1>
          <p style={{ color: "#5f7488", lineHeight: 1.6, margin: "0 0 24px" }}>
            The site hit an unexpected error. Please try again, or contact us directly.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{ padding: "12px 20px", borderRadius: 999, border: 0, background: "#07365f", color: "#fff", fontWeight: 700, cursor: "pointer" }}
            >
              Try Again
            </button>
            <a href={contact.phoneHref} style={{ padding: "12px 20px", borderRadius: 999, border: "1px solid #dce8f1", color: "#07365f", fontWeight: 700, textDecoration: "none" }}>
              Call {contact.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" style={{ padding: "12px 20px", borderRadius: 999, background: "#25d366", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
