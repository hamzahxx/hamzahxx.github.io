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
// ready. signalReady() both fires the intro (App listens) and fades the
// overlay out — at the same moment — so the animation plays AS the overlay
// clears instead of behind it. Min display avoids a flash on fast loads; the
// 2.2s cap keeps the loader from ever sticking if fonts are slow.
const signalReady = () => {
  window.__appReady = true;
  window.dispatchEvent(new Event("app:ready"));
};

const pre = document.getElementById("preload");
if (pre) {
  const start = performance.now();
  const done = () => {
    const wait = Math.max(0, 500 - (performance.now() - start));
    setTimeout(() => {
      // Fade the overlay out first; only once it's fully gone do we fire the
      // intro — so the animation starts on a clear stage, not behind the loader.
      let handed = false;
      const handoff = () => {
        if (handed) return;
        handed = true;
        pre.remove();
        signalReady();
      };
      pre.addEventListener("transitionend", handoff, { once: true });
      setTimeout(handoff, 700); // fallback if transitionend never fires
      pre.classList.add("is-done"); // triggers the opacity fade
    }, wait);
  };
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2200))]).then(done);
} else {
  signalReady();
}
