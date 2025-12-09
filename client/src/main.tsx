import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ color: "#0ff", fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1>Electroplating Lab</h1>
      <p>If you see this, the client built and loaded correctly.</p>
    </div>
  );
}

const container = document.getElementById("root")!;
createRoot(container).render(<App />);
