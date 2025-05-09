import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/fonts.css"; // Import our custom fonts first
import "./styles/tech-theme.css"; // Import our tech theme
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Create root with specific options to avoid hydration issues
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);