import SectionHeading from "./SectionHeading.jsx";
import { projects, profile } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
      <SectionHeading index="04" eyebrow="selected work" title="Things I've built" />

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            data-reveal
            className="group relative flex flex-col border border-rule bg-ink2/40 p-6 md:p-7 hover:-translate-y-1 hover:border-accent/60 hover:bg-ink2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs tracking-wider text-ash/70">
                P-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-ash group-hover:text-accent transition-colors" aria-hidden="true">
                ↗
              </span>
            </div>

            <h3 className="font-display text-xl text-bone group-hover:text-accent transition-colors">
              {p.name}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ash flex-1">
              {p.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 pt-4 border-t border-rule">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-ash/70">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center" data-reveal>
        <a
          href={`${profile.socials.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline underline-offset-4"
        >
          <img src="/images/svg/github.svg" alt="" className="w-4 h-4 invert opacity-80" />
          more on github <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
