const base = typeof import.meta.env?.BASE_URL === "string" ? import.meta.env.BASE_URL : "/";
const resumePath = base.endsWith("/") ? `${base}resume.pdf` : `${base}/resume.pdf`;

export const SITE = {
  resumePdfUrl: resumePath,
  resumeDownloadName: "Filip_Miseljic_Resume.pdf",
  siteUrl: "https://MiseljicFilip.github.io/filipmiseljic",
  email: "cofo.miseljic@gmail.com",
  lastUpdated: "Feb 2026",
  lastUpdatedISO: "2026-02",
  builtWith: ["React", "Tailwind CSS", "Vite"],
  person: {
    name: "Filip Mišeljić",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building fast, beautiful, and user-friendly web applications.",
    image: null,
    sameAs: ["https://www.linkedin.com/in/filip-miseljic/", "https://github.com/MiseljicFilip"],
  },
};
