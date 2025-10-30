import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";          // ← THIS LINE

const root = ReactDOM.createRoot(
  document.getElementById("root")!
);

// Dark-mode persistence
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = saved || (prefersDark ? "dark" : "light");

if (initial === "dark") {
  document.documentElement.classList.add("dark");
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);