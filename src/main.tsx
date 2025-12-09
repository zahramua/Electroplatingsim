import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function App() {
  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Electroplating Lab
      </h1>
      <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>
        Welcome to the Electroplating Simulation
      </p>
      <p style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: "1rem" }}>
        Successfully deployed via GitHub Pages
      </p>
    </div>
  );
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

createRoot(container).render(<App />);
