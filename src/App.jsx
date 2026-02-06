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

function getStoredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark" || saved === "system") return saved;
  return "system";
}

function getStoredAccent() {
  const saved = localStorage.getItem(ACCENT_KEY);
  if (ACCENTS.includes(saved)) return saved;
  return "blue";
}

function getResolvedTheme() {
  const stored = getStoredTheme();
  if (stored !== "system") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState(getResolvedTheme);
  const [accent, setAccent] = useState(getStoredAccent);

  useEffect(() => {
    const resolved = getResolvedTheme();
    setResolvedTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
  }, [accent]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        const resolved = getResolvedTheme();
        setResolvedTheme(resolved);
        document.documentElement.setAttribute("data-theme", resolved);
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const setThemeAndPersist = (next) => {
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  const cycleTheme = () => {
    const order = ["light", "dark", "system"];
    const i = order.indexOf(theme);
    setThemeAndPersist(order[(i + 1) % order.length]);
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
