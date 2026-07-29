import { useState, useEffect } from "react";
import { profile } from "../data.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      data-nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "border-rule bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono font-bold text-bone tracking-tight">
          hamzahcodes<span className="text-accent">.</span>in
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ash hover:text-bone transition-colors"
            >
              <span className="font-mono text-accent/70 mr-1 text-xs">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent border border-accent/40 rounded-md px-4 py-1.5 hover:bg-accent/10 hover:border-accent transition-colors"
          >
            Résumé
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center text-bone"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t transition-all duration-300 ${
          open ? "max-h-96 border-rule bg-ink/95 backdrop-blur-md" : "max-h-0 border-transparent"
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-ash hover:text-accent border-b border-rule transition-colors"
            >
              <span className="font-mono text-accent/70 mr-2 text-xs">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 text-center text-accent border border-accent/40 rounded-md px-4 py-3 hover:bg-accent/10 transition-colors"
          >
            Résumé
          </a>
        </div>
      </div>
    </header>
  );
}
