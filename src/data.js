// Single source of truth for all site content. Edit here to update the site.

export const profile = {
  name: "Hamzah Chhapra",
  role: "Developer & Product Manager",
  // Rotating words under the name (kept short so they fit on one line on mobile).
  rotating: ["Full-Stack Developer", "Product Manager", "Problem Solver"],
  company: "The Souled Store",
  companyUrl: "https://www.thesouledstore.com",
  location: "Mumbai, India",
  tagline: "I build things that ship — from the database to the pixel.",
  email: "chhaprahamzah@gmail.com",
  resume: "/assets/hamzah-cv.pdf",
  // Optional hero portrait. Leave blank ("") to keep the datasheet card.
  // Drop the file in public/images/hero/ and set e.g. "/images/hero/me.jpg".
  heroPhoto: "",
  socials: {
    github: "https://github.com/hamzahxx",
    linkedin: "https://www.linkedin.com/in/hamzahchhapra/",
    x: "https://x.com/copypastecoder7",
    instagram: "https://instagram.com/hxmzxhxx",
  },
};

// The little datasheet card in the hero.
export const whoami = {
  role: "Product Management Trainee",
  company: "The Souled Store",
  stack: ["React", "Node.js", "FastAPI", "Supabase"],
  status: "building products & internal tools",
};

export const about = [
  "I'm a full-stack developer based in Mumbai who likes turning messy problems into clean, working software people actually use.",
  "I graduated with a BCA from Manipal University Jaipur, and I'm now a full-time Product Management Trainee at The Souled Store — I manage our customer-facing products and own the development of our internal tools end to end (an HRMS employee directory, a live retail-training dashboard, data pipelines, the works).",
  "I care about readable code, thoughtful UX, and shipping to production. Outside work I build side projects — like Stocker, a stock-screening platform for NSE-listed equities.",
];

export const experience = [
  {
    company: "The Souled Store",
    url: "https://www.thesouledstore.com",
    role: "Product Management Trainee",
    period: "Jul 2026 — Present",
    location: "Mumbai · Full-time",
    points: [
      "Manage The Souled Store's customer-facing products — shaping requirements, helping prioritise what we build, and driving features from idea to release.",
      "Continue to own the internal tools I built as an engineer — evolving and maintaining production apps used daily by HQ, store, and ops teams.",
      "Work PRD-first and bridge product and engineering — I write the spec, then build and ship it myself, front end to database, so ideas don't get lost in the hand-off.",
    ],
    tags: ["Product", "Full-Stack", "React", "Supabase"],
  },
  {
    company: "The Souled Store",
    url: "https://www.thesouledstore.com",
    role: "Tech Intern",
    period: "Apr 2026 — Jul 2026",
    location: "Mumbai",
    points: [
      "Built and shipped a suite of internal full-stack tools to production — across retail ops, merchandising, manufacturing, finance, HR, and logistics — owning each end to end, from database schema to deploy.",
      "Flagship: an interactive multi-store planogram / shelf-layout builder — a canvas editor (Next.js, TypeScript, react-konva) with SKU assignment, layout versioning & publishing, and bulk Excel/CSV import, backed by Prisma + PostgreSQL.",
      "Shipped data & automation tooling — a returns analytics dashboard (React, Supabase, Chart.js), an apparel techpack PDF generator (Node + Google APIs), a Playwright web crawler, and a webhook-ingestion logistics dashboard.",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  },
  {
    company: "The Souled Store",
    url: "https://www.thesouledstore.com",
    role: "IT Intern",
    period: "Jan 2026 — Mar 2026",
    location: "Mumbai",
    points: [
      "Wrote Python software that automated hundreds of hours of manual IT-asset gathering for audits.",
      "Kept operations running by providing technical support for hardware and software issues.",
      "Diagnosed and fixed hardware-level PC issues — GPU testing, SATA SSD → NVMe upgrades — to improve performance.",
    ],
    tags: ["Python", "IT Support"],
  },
  {
    company: "Freelance Client",
    url: null,
    role: "Frontend Intern",
    period: "Mar 2025 — May 2025",
    location: "Remote",
    points: [
      "Handled front-end maintenance and bug fixing for a PHP-based client website.",
      "Added multi-language support (French, Spanish) across the site.",
      "Improved layout consistency and responsiveness, aligning front-end work with existing PHP templates.",
    ],
    tags: ["JavaScript", "PHP", "CSS"],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C / C++", "Dart"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "GSAP", "Chart.js"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Prisma", "REST APIs"] },
  { group: "Database", items: ["PostgreSQL", "Supabase", "Redis"] },
  { group: "Automation & Tools", items: ["Git", "GitHub", "Playwright", "Google Apps Script", "Figma", "Bash / Zsh"] },
  { group: "Deploy & Infra", items: ["Vercel", "Railway", "Docker", "CI/CD"] },
];

// Featured project from the resume + real GitHub repos (hamzahxx).
export const projects = [
  {
    name: "Stocker",
    description:
      "A full-stack stock-screening platform for NSE equities. A weighted scoring engine ranks stocks from 11 technical indicators (RSI, MACD, ADX, EMA/SMA, Fibonacci) into one readable score. Redis caching + parallel processing cut index screening from 1–2 min to under 2s (~99% faster).",
    tags: ["Python", "FastAPI", "React", "Redis", "Supabase"],
    repo: "https://github.com/hamzahxx/Stocker-Screener",
    demo: null,
    featured: true,
  },
  {
    name: "finance-manager",
    description:
      "A command-line personal-finance manager in C++ — track income and expenses, view summaries, and keep a persistent record of transactions.",
    tags: ["C++", "CLI"],
    repo: "https://github.com/hamzahxx/finance-manager",
    demo: null,
    featured: false,
  },
  {
    name: "iPod.js",
    description:
      "A browser-based iPod interface built with vanilla JavaScript — click-wheel navigation and a nostalgic UI, no frameworks.",
    tags: ["JavaScript", "UI"],
    repo: "https://github.com/hamzahxx/iPod.js",
    demo: null,
    featured: false,
  },
  {
    name: "downloader",
    description:
      "A small Python utility that downloads content from a given link — a handy tool that scratched my own itch.",
    tags: ["Python", "CLI"],
    repo: "https://github.com/hamzahxx/downloader",
    demo: null,
    featured: false,
  },
];
