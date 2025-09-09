import { Sun, Moon } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen, toggleDisplayMode, darkMode}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full bg-[rgb(10,10,10,.95)] z-40 flex flex-col items-center justify-center transition-all ease-in-out duration-300 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
      >
        <button
  type="button"
  onClick={toggleDisplayMode}
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  title={darkMode ? "Light mode" : "Dark mode"}
  className="absolute top-6 left-6
    inline-flex items-center justify-center
    h-9 w-9 rounded-4xl 
     
     hover:bg-gray-700 text-gray-100
    transition-colors
  "
>
  {darkMode ? (
    <Sun className="h-5 w-5" />
  ) : (
    <Moon className="h-5 w-5" />
  )}
</button>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>

        <a
          href="#home"
          className={` text-2xl text-white transition-transform duration-300 my-4 font-semibold ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={` text-2xl text-white transition-transform duration-300 my-4 font-semibold ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={` text-2xl text-white transition-transform duration-300 my-4 font-semibold ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={` text-2xl text-white transition-transform duration-300 my-4 font-semibold ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </>
  );
};
