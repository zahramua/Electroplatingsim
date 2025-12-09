import React from "react";
import { createRoot } from "react-dom/client";

// If you have an App component already:
// import App from "./App";

// Example App if you don't have one yet:
function App() {
  return (
    <div style={{ height: "100vh", margin: 0 }}>
      <canvas id="game" style={{ width: "100vw", height: "100vh", display: "block" }} />
    </div>
  );
}

const container = document.getElementById("root")!;
createRoot(container).render(<App />);

// Initialize your actual game here:
// If you have a Game class or module, import and run it:
// import { startGame } from "./game";
// startGame(document.getElementById("game") as HTMLCanvasElement);

// Temporary demo (remove once your game runs):
const canvas = document.getElementById("game") as HTMLCanvasElement | null;
if (canvas) {
  const ctx = canvas.getContext("2d")!;
  let t = 0;
  function loop() {
    t++;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0ff";
    const x = (Math.sin(t * 0.02) * 0.5 + 0.5) * canvas.width;
    const y = (Math.cos(t * 0.02) * 0.5 + 0.5) * canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fill();
    requestAnimationFrame(loop);
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();
  loop();
}
