import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
      <SectionHeading index="02" eyebrow="work" title="Where I've worked" />

      <div className="relative border-l border-rule pl-8 md:pl-10 space-y-12">
        {experience.map((job) => (
          <div key={job.company} data-reveal className="relative">
            {/* timeline node */}
            <span className="absolute -left-[41px] md:-left-[49px] top-1.5 grid place-items-center w-4 h-4 rounded-full bg-ink border border-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>

            <p className="font-mono text-xs text-ash/70 tracking-wider">
              {job.period} · {job.location}
            </p>
            <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-display text-2xl text-bone">{job.role}</h3>
              <span className="text-accent">@</span>
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline underline-offset-4"
                >
                  {job.company}
                </a>
              ) : (
                <span className="text-accent">{job.company}</span>
              )}
            </div>

            <ul className="mt-4 space-y-2.5">
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ash">
                  <span className="text-accent mt-1 select-none font-mono text-xs" aria-hidden="true">▹</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-accent/90 border border-accent/25 rounded px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
