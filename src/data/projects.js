/**
 * Featured projects data. Edit here to add/update projects.
 * - type: used for filter chips (e.g. "Full-stack", "UI", "Frontend").
 * - tech: used for filter chips and displayed on each card.
 */
export const PROJECTS = [
  {
    id: "Redux From Scratch",
    title: "Redux From Scratch.",
    description:
      "Built my own Redux to understand how it works under the hood. I implemented a simple reducer, action, and store to manage the state of a counter app.",
    type: "Frontend",
    tech: ["React", "Redux"],
    liveUrl: "#",
    githubUrl: "https://github.com/MiseljicFilip/redux-from-scratch",
  },
  {
    id: "mern-notes",
    title: "MERN Notes.",
    description:
      "I implemented a simple CRUD app to learn the basics of the MERN stack.",
    type: "Full-stack",
    tech: ["MongoDB", "Express","React",  "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/MiseljicFilip/mern-notes",
  },
];

/** All unique types across projects (for filter UI). Sorted. */
export const PROJECT_TYPES = [...new Set(PROJECTS.map((p) => p.type))].sort();

/** All unique tech across projects (for filter UI). Sorted. */
export const PROJECT_TECH = [...new Set(PROJECTS.flatMap((p) => p.tech))].sort();
