import { ArrowRight, FileDown } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";
import { SITE } from "../../data/site";

const HERO = {
  name: "Filip",
  tagline:
    "Ever since I started coding, my goal has been simple: build web apps that look great, run fast, and make life easier for the people who use them.",
  ctas: [
    { label: "Projects", href: "#projects", primary: false },
    { label: "Contact", href: "#contact", primary: true },
    { label: "Download CV", href: SITE.resumePdfUrl, primary: false, download: SITE.resumeDownloadName },
  ],
};

const CTA_BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const CTA_OUTLINE =
  "border border-primary/50 text-primary hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-[0_2px_12px_var(--app-primary)]/20";
const CTA_PRIMARY =
  "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_4px_14px_var(--app-primary)]/30";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex relative items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent"
          >
            Hi, I'm {HERO.name}
          </h1>
          <p className="text-foreground mb-8 text-lg max-w-lg font-semibold mx-auto opacity-95">
            {HERO.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {HERO.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                download={cta.download ?? undefined}
                className={`${CTA_BASE} ${cta.primary ? CTA_PRIMARY : CTA_OUTLINE}`}
                aria-label={cta.download ? "Download resume (PDF)" : cta.label}
              >
                {cta.label}
                {cta.download ? (
                  <FileDown className="size-4" aria-hidden />
                ) : (
                  <ArrowRight className="size-4" aria-hidden />
                )}
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
