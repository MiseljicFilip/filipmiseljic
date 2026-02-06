import { useEffect } from "react";
import { Sun, Moon, Monitor, FileDown, Palette } from "lucide-react";
import { SITE } from "../data/site";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen, theme, resolvedTheme, onCycleTheme, accent, onCycleAccent }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const themeLabel =
    theme === "system"
      ? "System theme"
      : resolvedTheme === "dark"
        ? "Dark mode"
        : "Light mode";

  return (
    <nav
      className="fixed top-0 w-full z-40 border-b border-nav-border bg-nav-bg/90 backdrop-blur-xl transition-colors"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-semibold text-lg bg-gradient-to-r from-[var(--app-gradient-start)] to-[var(--app-gradient-end)] bg-clip-text text-transparent hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            Filip Mišeljić
          </a>

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-foreground hover:bg-surface transition-colors md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="text-xl font-medium">&#9776;</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.resumePdfUrl}
              download={SITE.resumeDownloadName}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Download resume (PDF)"
            >
              <FileDown className="size-4" aria-hidden />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={onCycleAccent}
              aria-label={`Accent: ${accent}. Click to cycle.`}
              title={`Accent: ${accent}`}
              className="ml-1 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Palette className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={onCycleTheme}
              aria-label={`Theme: ${themeLabel}. Click to cycle.`}
              title={themeLabel}
              className="ml-1 p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {theme === "system" ? (
                <Monitor className="size-5" aria-hidden />
              ) : resolvedTheme === "dark" ? (
                <Moon className="size-5" aria-hidden />
              ) : (
                <Sun className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
