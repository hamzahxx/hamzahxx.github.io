import { profile } from "../data.js";

const socials = [
  { key: "github", label: "GitHub", href: profile.socials.github, icon: "/images/svg/github.svg" },
  { key: "linkedin", label: "LinkedIn", href: profile.socials.linkedin, icon: "/images/svg/linkedin.svg" },
  { key: "x", label: "X", href: profile.socials.x, icon: "/images/svg/x.svg" },
  { key: "instagram", label: "Instagram", href: profile.socials.instagram, icon: "/images/svg/instagram.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ash/70 text-center sm:text-left">
          {profile.name.toUpperCase()} · BUILT WITH REACT + GSAP
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="opacity-40 hover:opacity-100 hover:-translate-y-0.5 transition-all"
            >
              <img src={s.icon} alt="" className="w-4 h-4 invert" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
