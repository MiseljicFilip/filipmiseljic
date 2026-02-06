import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

/**
 * Dots indicating which section is in view. Fixed on the right (desktop) or
 * horizontal bar (mobile). Uses scroll position to determine active section.
 */
export function SectionIndicator() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const viewportThird = window.innerHeight / 3;

    const handleScroll = () => {
      const sections = SECTIONS.map(({ id }) => ({
        id,
        el: document.getElementById(id),
      })).filter((s) => s.el);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el.getBoundingClientRect();
        if (rect.top <= viewportThird && rect.bottom > viewportThird) {
          setActiveId(sections[i].id);
          return;
        }
        if (rect.top < window.innerHeight) {
          setActiveId(sections[i].id);
          return;
        }
      }
      if (sections.length) setActiveId(sections[0].id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col gap-3">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block size-2.5 rounded-full border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeId === id
                  ? "bg-primary border-primary scale-125"
                  : "bg-transparent border-muted hover:border-foreground"
              }`}
              aria-label={`Go to ${label} section`}
              aria-current={activeId === id ? "true" : undefined}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
