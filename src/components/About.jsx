import SectionHeading from "./SectionHeading.jsx";
import { about, profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
      <SectionHeading index="01" eyebrow="about" title="A bit about me" />

      <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 items-start">
        <div data-reveal className="space-y-4 leading-relaxed text-[15px] md:text-base text-ash">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-3 font-mono text-xs tracking-wider text-ash/70">
            <span className="text-accent">◈</span> {profile.location.toUpperCase()} · CURRENTLY @ {profile.company.toUpperCase()}
          </p>
        </div>

        <div data-reveal className="crop mx-auto md:mx-0 w-56 md:w-full max-w-xs">
          <div className="relative overflow-hidden border border-rule bg-ink2 group">
            <img
              src="/images/body/hamzah.jpeg"
              alt={profile.name}
              className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-accent/15 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
