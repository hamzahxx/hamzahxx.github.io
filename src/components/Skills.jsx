import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
      <SectionHeading index="03" eyebrow="stack" title="What I work with" />

      <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
        {skills.map((cat, i) => (
          <div
            key={cat.group}
            data-reveal
            className={`bg-ink p-6 md:p-7 hover:bg-ink2 transition-colors ${
              i === skills.length - 1 && skills.length % 2 === 1 ? "sm:col-span-2" : ""
            }`}
          >
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ash/70 mb-5">
              <span className="text-accent">{"//"}</span> {cat.group}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-bone hover:text-accent transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
