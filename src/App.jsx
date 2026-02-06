import { useEffect, useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { StructuredData } from "./components/StructuredData";
import { ReadingProgress } from "./components/ReadingProgress";
import { SectionIndicator } from "./components/SectionIndicator";
import { Footer } from "./components/Footer";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { EasterEgg } from "./components/EasterEgg";

const THEME_KEY = "theme";
const ACCENT_KEY = "accent";

const ACCENTS = ["blue", "purple", "green"];

/** User's explicit choice: "light" | "dark" | null (null = follow system preference) */
function getStoredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return null; // no preference → follow system (no "system" stored)
}

function getStoredAccent() {
  const saved = localStorage.getItem(ACCENT_KEY);
  if (ACCENTS.includes(saved)) return saved;
  return "blue";
}

/** Resolved theme to apply: always "light" or "dark". Uses system when stored is null. */
function getResolvedTheme(stored) {
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme);
  const [accent, setAccent] = useState(getStoredAccent);
  const [systemResolved, setSystemResolved] = useState(() => getResolvedTheme(null));
  const resolvedTheme = theme !== null ? theme : systemResolved;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
  }, [accent]);

  // When user hasn't chosen a theme, follow system preference (e.g. OS dark mode change)
  useEffect(() => {
    if (theme !== null) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const resolved = getResolvedTheme(null);
      setSystemResolved(resolved);
      document.documentElement.setAttribute("data-theme", resolved);
    };
    setSystemResolved(getResolvedTheme(null)); // sync when following system
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const setThemeAndPersist = (next) => {
    setTheme(next);
    if (next === null) localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, next);
  };

  const cycleTheme = () => {
    const order = ["light", "dark"];
    const current = theme ?? getResolvedTheme(null);
    const next = order[(order.indexOf(current) + 1) % order.length];
    setThemeAndPersist(next);
  };

  const cycleAccent = () => {
    const i = ACCENTS.indexOf(accent);
    const next = ACCENTS[(i + 1) % ACCENTS.length];
    setAccent(next);
    localStorage.setItem(ACCENT_KEY, next);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <StructuredData />
      <EasterEgg />
      <div
        className={`theme-bg min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground relative z-[1]`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ReadingProgress />
        <SectionIndicator />
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          resolvedTheme={resolvedTheme}
          onCycleTheme={cycleTheme}
          accent={accent}
          onCycleAccent={cycleAccent}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          resolvedTheme={resolvedTheme}
          onCycleTheme={cycleTheme}
          accent={accent}
          onCycleAccent={cycleAccent}
        />
        <main id="main-content" tabIndex={-1} role="main">
          <Home />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
