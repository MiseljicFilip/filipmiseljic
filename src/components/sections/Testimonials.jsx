import { Quote, Linkedin, User } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";
import { TESTIMONIALS } from "../../data/testimonials";

const SECTION_TITLE =
  "text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent text-center";
const CARD_CLASS =
  "rounded-2xl p-6 border border-border bg-surface hover:bg-surface-hover transition-all duration-200 flex flex-col h-full";

function Avatar({ photo, name }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt=""
        className="size-12 rounded-full object-cover border-2 border-border"
        width={48}
        height={48}
      />
    );
  }
  const initial = name.trim().split(/\s+/).map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      className="size-12 rounded-full bg-primary/15 text-primary flex items-center justify-center border-2 border-border font-semibold text-sm"
      aria-hidden
    >
      {initial || <User className="size-6" />}
    </div>
  );
}

export const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center py-20"
      aria-labelledby="testimonials-heading"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="testimonials-heading" className={SECTION_TITLE}>
            What others say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className={CARD_CLASS}
                aria-label={`Recommendation from ${t.name}`}
              >
                <Quote
                  className="size-8 text-primary/40 mb-3 shrink-0"
                  aria-hidden
                />
                <blockquote className="text-foreground/90 flex-1 mb-6 text-sm leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <footer className="flex items-center gap-3 mt-auto">
                  <Avatar photo={t.photo} name={t.name} />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted truncate">
                      {t.role}
                      {t.company ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                  {t.linkedinUrl && (
                    <a
                      href={t.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0"
                      aria-label={`${t.name} on LinkedIn`}
                    >
                      <Linkedin className="size-5" aria-hidden />
                    </a>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
