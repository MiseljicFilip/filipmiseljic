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

export const PROJECT_TYPES = [...new Set(PROJECTS.map((p) => p.type))].sort();

export const PROJECT_TECH = [...new Set(PROJECTS.flatMap((p) => p.tech))].sort();
