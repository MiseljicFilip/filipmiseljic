import { useEffect, useState, useCallback, useRef } from "react";
import { Confetti } from "./Confetti";
import { Sparkles } from "lucide-react";

const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39]; // up up down down left right left right
const EGG_EVENT = "easter-egg-trigger";

const MESSAGES = {
  konami: {
    title: "You found the Konami code!",
    subtitle: "Classic move. Thanks for exploring.",
  },
  resume: {
    title: "Resume mode activated.",
    subtitle: "You found the secret URL.",
  },
  hint: {
    title: "You found the secret!",
    subtitle: "Next time try the Konami code: ↑ ↑ ↓ ↓ ← → ← →",
  },
};

function useKonami(onMatch) {
  useEffect(() => {
    let index = 0;
    const handleKeyDown = (e) => {
      if (e.keyCode === KONAMI[index]) {
        index++;
        if (index === KONAMI.length) {
          onMatch("konami");
          index = 0;
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onMatch]);
}

export function EasterEgg() {
  const [trigger, setTrigger] = useState(null);
  const timeoutRef = useRef(null);

  const activate = useCallback((source) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTrigger(source);
    timeoutRef.current = setTimeout(() => {
      setTrigger(null);
      timeoutRef.current = null;
    }, 5000);
  }, []);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useKonami(activate);

  useEffect(() => {
    const handleTrigger = () => activate("hint");
    document.addEventListener(EGG_EVENT, handleTrigger);
    return () => document.removeEventListener(EGG_EVENT, handleTrigger);
  }, [activate]);

  useEffect(() => {
    const checkResume = () => {
      const pathname = window.location.pathname || "";
      const hash = (window.location.hash || "").toLowerCase();
      if (pathname.endsWith("resume") || pathname.endsWith("resume/") || hash === "#resume") {
        activate("resume");
      }
    };
    checkResume();
    window.addEventListener("hashchange", checkResume);
    return () => window.removeEventListener("hashchange", checkResume);
  }, [activate]);

  const message = trigger ? MESSAGES[trigger] || MESSAGES.hint : null;

  return (
    <>
      {trigger && (
        <>
          <Confetti />
          <div
            className="fixed inset-0 z-[75] flex items-center justify-center p-4 animate-easter-modal"
            role="dialog"
            aria-labelledby="easter-egg-title"
            aria-describedby="easter-egg-desc"
          >
            <div className="absolute inset-0 bg-black/15" aria-hidden />
            <div className="relative w-full max-w-sm rounded-2xl border-2 border-primary/50 bg-white dark:bg-gray-900 p-6 shadow-2xl shadow-primary/20 text-center animate-easter-card">
              <Sparkles className="mx-auto size-10 text-primary mb-3" aria-hidden />
              <h2 id="easter-egg-title" className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {message?.title}
              </h2>
              <p id="easter-egg-desc" className="text-sm text-gray-600 dark:text-gray-300">
                {message?.subtitle}
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                This message will close in a few seconds.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/** Call from anywhere to trigger the Easter egg (e.g. footer hint link). */
export function triggerEasterEgg() {
  document.dispatchEvent(new CustomEvent(EGG_EVENT));
}
