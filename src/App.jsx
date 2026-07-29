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

    const ctx = gsap.context(() => {
      // Hero intro — the datasheet "boots" in and settles, its rows populate,
      // then the left column rises in.
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.15 })
        .from("[data-nav]", { y: -18, opacity: 0, duration: 0.6 })
        .from("[data-hud]", { opacity: 0, duration: 0.5 }, "<")
        .from("[data-card]", {
          y: -28,
          opacity: 0,
          scale: 0.97,
          duration: 0.55,
          ease: "back.out(1.4)",
        })
        .from(
          "[data-row]",
          { y: 8, opacity: 0, duration: 0.3, stagger: 0.07 },
          "-=0.15"
        )
        .from(
          "[data-hero]",
          { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.2"
        );

      // Scroll reveals for everything tagged [data-reveal].
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

    return () => ctx.revert();
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
