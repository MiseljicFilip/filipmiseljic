import { Sun, Moon, X, FileDown, Palette } from "lucide-react";
import { SITE } from "../data/site";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen, theme, resolvedTheme, onCycleTheme, accent, onCycleAccent }) => {
  const themeLabel = resolvedTheme === "dark" ? "Dark mode" : "Light mode";

  return (
    <div
      className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ease-out ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-hidden={!menuOpen}
    >
      <div className="absolute top-6 left-6 flex items-center gap-1">
        <button
          type="button"
          onClick={onCycleAccent}
          aria-label={`Accent: ${accent}`}
          title={`Accent: ${accent}`}
          className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Palette className="size-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={onCycleTheme}
          aria-label={`Theme: ${themeLabel}`}
          title={themeLabel}
          className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="size-6" aria-hidden />
          ) : (
            <Sun className="size-6" aria-hidden />
          )}
        </button>
      </div>
      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 p-2 rounded-lg text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Close menu"
      >
        <X className="size-6" aria-hidden />
      </button>

      <nav className="flex flex-col items-center gap-2" aria-label="Mobile menu">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-xl font-medium text-foreground py-3 px-4 rounded-lg hover:bg-surface transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={menuOpen ? { transitionDelay: `${40 * (i + 1)}ms` } : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={SITE.resumePdfUrl}
          download={SITE.resumeDownloadName}
          className={`inline-flex items-center gap-2 text-xl font-medium text-primary py-3 px-4 rounded-lg hover:bg-surface transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={menuOpen ? { transitionDelay: "200ms" } : undefined}
          onClick={() => setMenuOpen(false)}
          aria-label="Download resume (PDF)"
        >
          <FileDown className="size-5" aria-hidden />
          Download CV
        </a>
      </nav>
    </div>
  );
};
