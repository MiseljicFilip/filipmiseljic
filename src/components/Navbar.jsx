import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen,toggleDisplayMode, darkMode  }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:to-cyan-200"
          >
            {" "}
            Filip Mišeljić{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            
            <a
              href="#home"
              className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            <button
  type="button"
  onClick={toggleDisplayMode}
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  title={darkMode ? "Light mode" : "Dark mode"}
  className="
    inline-flex items-center justify-center
    h-9 w-9 rounded-4xl 
     hover:bg-gray-100 text-gray-900
     dark:hover:bg-gray-700 dark:text-gray-100
    transition-colors
  "
>
  {darkMode ? (
    <Sun className="h-5 w-5" />
  ) : (
    <Moon className="h-5 w-5" />
  )}
</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
