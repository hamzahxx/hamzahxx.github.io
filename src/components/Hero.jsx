import { useEffect, useState } from "react";
import { profile, whoami } from "../data.js";

function RotatingWord({ words }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0;
    let i = words[0].length;
    let deleting = true; // start full, pause, then delete
    let t;
    const tick = () => {
      const word = words[w];
      if (deleting) {
        i -= 1;
        setText(word.slice(0, i));
        if (i <= 0) {
          deleting = false;
          w = (w + 1) % words.length;
          t = setTimeout(tick, 400);
        } else {
          t = setTimeout(tick, 45);
        }
      } else {
        i += 1;
        setText(word.slice(0, i));
        if (i >= word.length) {
          deleting = true;
          t = setTimeout(tick, 1500);
        } else {
          t = setTimeout(tick, 90);
        }
      }
    };
    t = setTimeout(tick, 1500);
    return () => clearTimeout(t);
  }, [words]);

  return (
    <span className="text-accent">
      {text}
      <span className="caret" aria-hidden="true">|</span>
    </span>
  );
}

// Live HUD clock in Hamzah's timezone (IST) — real time, not fake telemetry.
function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

const socialLinks = [
  { key: "github", label: "GitHub", href: profile.socials.github, icon: "/images/svg/github.svg" },
  { key: "linkedin", label: "LinkedIn", href: profile.socials.linkedin, icon: "/images/svg/linkedin.svg" },
  { key: "x", label: "X", href: profile.socials.x, icon: "/images/svg/x.svg" },
];

// Datasheet rows — the hero's spec block.
const spec = [
  { k: "NAME", v: profile.name },
  { k: "ROLE", v: whoami.role },
  { k: "LOCATION", v: profile.location },
  { k: "STACK", v: whoami.stack.join(" · ") },
];

export default function Hero() {
  return (
    <section id="home" className="bg-grid relative min-h-screen flex items-center overflow-hidden">
      {/* soft accent glow */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/[0.07] blur-[130px]"
        aria-hidden="true"
      />
      {/* fade grid into the page below */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" aria-hidden="true" />

      {/* HUD overlay — instrument framing (desktop only) */}
      <div data-hud className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {/* faint radial gauge bleeding off the top-right — smaller/tucked on mobile, larger on desktop */}
        <svg
          className="absolute -top-12 -right-16 w-52 h-52 text-accent/35 md:-top-24 md:-right-28 md:w-72 md:h-72 md:text-accent/20 motion-safe:animate-spin"
          style={{ animationDuration: "18s" }}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="49" strokeWidth="0.4" strokeDasharray="1 4" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.3" />
          {/* two sweep arcs, 180° apart — a thick line passes twice per rotation */}
          <path d="M50 1 A49 49 0 0 1 92 26" strokeWidth="1.6" className="text-accent/70" />
          <path d="M50 1 A49 49 0 0 1 92 26" strokeWidth="1.6" className="text-accent/70" transform="rotate(180 50 50)" />
        </svg>

        {/* corner reticles — all screens */}
        <span className="absolute top-20 left-6 h-6 w-6 border-t border-l border-accent/40" />
        <span className="absolute top-20 right-6 h-6 w-6 border-t border-r border-accent/40" />
        <span className="absolute bottom-8 left-6 h-6 w-6 border-b border-l border-accent/40" />
        <span className="absolute bottom-8 right-6 h-6 w-6 border-b border-r border-accent/40" />

        {/* top telemetry — desktop only (clears the nav on mobile) */}
        <span className="hidden md:block absolute top-[4.9rem] left-16 font-mono text-[10px] tracking-[0.25em] text-accent/60">SYS · ONLINE</span>
        <span className="hidden md:block absolute top-[4.9rem] right-16 font-mono text-[10px] tracking-[0.25em] text-ash/45">PORTFOLIO · REV 2026</span>

        {/* bottom telemetry — all screens */}
        <span className="absolute bottom-[1.6rem] left-16 font-mono text-[10px] tracking-[0.25em] text-ash/45">19.04°N 72.84°E</span>
        <span className="absolute bottom-[1.6rem] right-16 font-mono text-[10px] tracking-[0.25em] text-accent/60"><Clock /></span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-32 pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-y-14 lg:gap-x-16 items-center">
        {/* Left: intro */}
        <div>
          <p data-hero className="font-mono text-xs tracking-[0.22em] uppercase text-accent mb-6">
            Hamzah Chhapra — rev. 2026
          </p>
          <h1
            data-hero
            className="font-display font-medium text-[clamp(3rem,9vw,6rem)] leading-[0.92] tracking-[-0.02em] text-bone"
          >
            Building
            <br />
            things that
            <br />
            <span className="italic">ship<span className="text-accent">.</span></span>
          </h1>

          <p data-hero className="mt-7 text-xl sm:text-2xl text-ash">
            I'm a <RotatingWord words={profile.rotating} />
          </p>

          <p data-hero className="mt-4 max-w-md text-ash/90 leading-relaxed">
            Full-stack developer working across the stack — from the database to
            the pixel. Currently at{" "}
            <a
              href={profile.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-bone underline decoration-accent/50 decoration-2 underline-offset-4 hover:text-accent transition-colors"
            >
              {profile.company}
            </a>
            .
          </p>

          <div data-hero className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-ink font-medium rounded-md px-6 py-3 hover:bg-accent-soft transition-colors"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-bone font-medium border border-rule rounded-md px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div data-hero className="mt-9 flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="opacity-50 hover:opacity-100 hover:-translate-y-0.5 transition-all"
              >
                <img src={s.icon} alt="" className="w-5 h-5 invert" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: palette-treated photo if profile.heroPhoto is set, else the datasheet signature */}
        {profile.heroPhoto ? (
          <div data-card className="crop relative aspect-[4/5] border border-rule bg-ink2 overflow-hidden">
            <img
              src={profile.heroPhoto}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.05]"
            />
            {/* gold duotone tint + dark gradient for legibility */}
            <div className="pointer-events-none absolute inset-0 bg-accent/25 mix-blend-overlay" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden="true" />
            {/* caption bar */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-xs">
              <span className="text-bone tracking-wider">{profile.name.toUpperCase()}</span>
              <span className="flex items-center gap-2 text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                LIVE
              </span>
            </div>
          </div>
        ) : (
        <div data-card className="crop border border-rule bg-ink2/70 backdrop-blur-sm p-6 sm:p-7">
          <div data-row className="flex items-center justify-between pb-4 mb-5 border-b border-rule">
            <span className="font-mono text-xs tracking-[0.2em] text-ash">
              HXX · DATASHEET
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              LIVE
            </span>
          </div>

          <dl className="font-mono text-sm space-y-3.5">
            {spec.map((row) => (
              <div key={row.k} data-row className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline">
                <dt className="text-ash/70 tracking-wider">{row.k}</dt>
                <dd className="text-bone">{row.v}</dd>
              </div>
            ))}
            <div data-row className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline pt-3.5 border-t border-rule">
              <dt className="text-ash/70 tracking-wider">STATUS</dt>
              <dd className="text-accent">building @ {whoami.company}</dd>
            </div>
          </dl>
        </div>
        )}
      </div>
    </section>
  );
}
