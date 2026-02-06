import { GraduationCap, Briefcase } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const SKILLS = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Redux", icon: "redux", color: "#764ABC" },
  { name: "Vue", icon: "vuedotjs", color: "#4FC08D" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "Node.js", icon: "nodedotjs", color: "#339933" },
  { name: "Express", icon: "express", color: "#717171" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
];
const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";
const EDUCATION = {
  school: "Higher Educational Technical School of Professional Studies Novi Sad",
  coursework: [
    "You Don’t Know JS Yet – Deep JavaScript Fundamentals",
    "JavaScript: The Hard Parts (Frontend Masters)",
    "Epic React – Advanced React Patterns & Performance",
    "Node.js Design Patterns – Scalable Node.js Architecture",
  ],
};
const EXPERIENCE = [
  {
    id: "transatlantic",
    role: "Fullstack Developer",
    company: "Transatlantic Digital",
    period: "October 2022 – December 2023",
    description:
      "Worked on Mint Day Media, an NFT publishing platform — developed React components and Node APIs, integrated Web3 wallets, and contributed to Dockerized deployment.",
  },
  {
    id: "petkom",
    role: "Frontend Developer",
    company: "Freelance",
    period: "May 2023 – September 2025",
    description: "Built and deployed the full frontend of ERP/CRP system.",
  },
];

const CARD_CLASS =
  "rounded-2xl p-6 border border-border bg-surface hover:bg-surface-hover hover:-translate-y-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-ring/30";
const SECTION_TITLE =
  "text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent text-center";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
      aria-labelledby="about-heading"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 id="about-heading" className={SECTION_TITLE}>
            About Me
          </h2>

          <div className={CARD_CLASS}>
            <p className="text-foreground/90 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary py-1.5 pl-2 pr-3 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <img
                    src={`${SIMPLE_ICONS_CDN}/${skill.icon}/${skill.color.replace("#", "")}`}
                    alt=""
                    className="size-4 shrink-0"
                    width={16}
                    height={16}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className={CARD_CLASS}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <GraduationCap className="size-5 text-primary" aria-hidden />
                Education
              </h3>
              <p className="font-semibold text-foreground/90 mb-3">
                {EDUCATION.school}
              </p>
              <p className="text-sm font-semibold text-muted mb-2">
                Relevant coursework:
              </p>
              <ul className="text-foreground/90 space-y-1 list-disc list-inside text-sm">
                {EDUCATION.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
            <div className={CARD_CLASS}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <Briefcase className="size-5 text-primary" aria-hidden />
                Work Experience
              </h3>
              <ul className="space-y-4 text-foreground/90" role="list">
                {EXPERIENCE.map((job) => (
                  <li key={job.id}>
                    <h4 className="font-semibold text-foreground">
                      {job.role} at {job.company}
                    </h4>
                    <span className="text-sm text-muted block mb-1">
                      {job.period}
                    </span>
                    <p className="text-sm">{job.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
