import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const root = useRef(null);

  useLayoutEffect(() => {
    // Respect reduced-motion: skip all animation, leave everything visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let intro;
    const ctx = gsap.context(() => {
      // Hero intro — built PAUSED. It only plays once the preloader hands off
      // (see main.jsx), so the animation isn't wasted behind the overlay.
      // Overlapping (not sequential) so the headline lands fast.
      intro = gsap
        .timeline({ defaults: { ease: "power3.out" }, paused: true })
        .from("[data-nav]", { y: -20, opacity: 0, duration: 0.8 }, 0)
        .from("[data-hud]", { opacity: 0, duration: 1.1 }, 0)
        .from(
          "[data-hero]",
          { y: 34, opacity: 0, duration: 1.0, stagger: 0.16 },
          0.3
        )
        .from(
          "[data-card]",
          { y: -34, opacity: 0, scale: 0.96, duration: 0.95, ease: "back.out(1.4)" },
          0.5
        )
        .from(
          "[data-row]",
          { y: 12, opacity: 0, duration: 0.6, stagger: 0.11 },
          1.15
        );

      // Scroll reveals for everything tagged [data-reveal] (independent of the intro).
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, root);

    // Play the intro when the preloader signals it's handing off. Guard for the
    // case where the signal already fired before this listener attached.
    const start = () => intro && intro.play();
    if (window.__appReady) start();
    else window.addEventListener("app:ready", start, { once: true });

    return () => {
      window.removeEventListener("app:ready", start);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
