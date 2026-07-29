import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hand off from the static preloader once the app is mounted and fonts are
// ready. Min display avoids a flash on fast loads; the 2.2s cap keeps the
// loader from ever sticking if fonts are slow.
const pre = document.getElementById("preload");
if (pre) {
  const start = performance.now();
  const done = () => {
    const wait = Math.max(0, 500 - (performance.now() - start));
    setTimeout(() => {
      pre.classList.add("is-done");
      setTimeout(() => pre.remove(), 500);
    }, wait);
  };
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2200))]).then(done);
}
