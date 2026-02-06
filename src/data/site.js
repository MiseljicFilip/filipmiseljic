/**
 * Site-wide config: resume PDF, structured data, etc.
 * - resumePdfUrl: replace public/resume.pdf to update the PDF.
 * - siteUrl: canonical site URL (no trailing slash). Used for JSON-LD and links.
 * - person: used for JSON-LD Person schema. sameAs = LinkedIn, GitHub, etc.
 */
const base = typeof import.meta.env?.BASE_URL === "string" ? import.meta.env.BASE_URL : "/";
const resumePath = base.endsWith("/") ? `${base}resume.pdf` : `${base}/resume.pdf`;

export const SITE = {
  resumePdfUrl: resumePath,
  resumeDownloadName: "Filip_Miseljic_Resume.pdf",
  /** Canonical URL of the site (no trailing slash). */
  siteUrl: "https://MiseljicFilip.github.io/filipmiseljic",
  /** Your email for the "Copy email" button in Contact. */
  email: "cofo.miseljic@gmail.com",
  /** Shown in footer. Update when you last changed the site. */
  lastUpdated: "Feb 2026",
  /** Optional. ISO date for <time dateTime> (e.g. "2025-02"). */
  lastUpdatedISO: "2026-02",
  /** Shown in footer as "Built with X, Y, Z". */
  builtWith: ["React", "Tailwind CSS", "Vite"],
  /** For JSON-LD Person schema. Add your LinkedIn, GitHub, etc. to sameAs. */
  person: {
    name: "Filip Mišeljić",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building fast, beautiful, and user-friendly web applications.",
    /** Optional: profile image URL. */
    image: null,
    /** Optional: array of social/profile URLs (LinkedIn, GitHub, etc.). */
    sameAs: ["https://www.linkedin.com/in/filip-miseljic/", "https://github.com/MiseljicFilip"],
  },
};
