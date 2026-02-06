import { SITE } from "../data/site";
import { triggerEasterEgg } from "./EasterEgg";

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-surface/50 py-8 px-4"
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          Last updated:{" "}
          {SITE.lastUpdatedISO ? (
            <time dateTime={SITE.lastUpdatedISO}>{SITE.lastUpdated}</time>
          ) : (
            <span>{SITE.lastUpdated}</span>
          )}
        </p>
        <p className="flex flex-wrap items-center justify-center gap-1.5">
          <span>Built with</span>
          {SITE.builtWith.map((tech, i) => (
            <span key={tech}>
              {tech}
              {i < SITE.builtWith.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
        <button
          type="button"
          onClick={triggerEasterEgg}
          className="text-muted-soft hover:text-primary text-xs underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          aria-label="Reveal a secret"
        >
          Something secret
        </button>
      </div>
    </footer>
  );
}
