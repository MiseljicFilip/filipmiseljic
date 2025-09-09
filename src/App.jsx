import { useEffect, useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("displayMode");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return true;
  });

  useEffect(() => {
    const saved = localStorage.getItem("displayMode");
    if (!saved) {
      saved = "dark"
      setDarkMode(true);
      localStorage.setItem("displayMode", saved);
    }
      setDarkMode(saved === 'dark' ? true : false);
  }, []);

  const toggleDisplayMode = () => setDarkMode((v) => !v);

  return (
    <div className={`${
          darkMode ? "dark " : " "
        }`}>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={` min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleDisplayMode={toggleDisplayMode} darkMode={darkMode}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleDisplayMode={toggleDisplayMode} darkMode={darkMode}/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
