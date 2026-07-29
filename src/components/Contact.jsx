import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
      <p data-reveal className="font-mono text-xs tracking-[0.22em] uppercase text-accent mb-5">
        05 / 05 — what's next
      </p>
      <h2 data-reveal className="font-display font-medium text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] tracking-tight text-bone">
        Let's build
        <br />
        <span className="italic">something<span className="text-accent">.</span></span>
      </h2>
      <p data-reveal className="mt-7 text-ash leading-relaxed max-w-xl mx-auto">
        My inbox is always open — an opportunity, a collaboration, or just to say
        hi. I'll get back to you.
      </p>

      <div data-reveal className="mt-10">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 bg-accent text-ink font-medium rounded-md px-8 py-3.5 hover:bg-accent-soft transition-colors"
        >
          Say hello
        </a>
        <p className="mt-5 font-mono text-sm text-ash">{profile.email}</p>
      </div>
    </section>
  );
}
