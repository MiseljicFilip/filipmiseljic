import { useEffect } from "react";
import { SITE } from "../data/site";

const LOAD_DURATION_MS = 2000;

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const t = setTimeout(onComplete, LOAD_DURATION_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  const initials = SITE.person.name
    .split(/\s+/)
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-background text-foreground"
      aria-label="Loading"
      role="status"
    >
      {/* Soft gradient glow behind the logo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-48 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(ellipse at center, var(--app-primary) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Initials with gradient and entrance animation */}
        <div
          className="loader-text text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
          style={{
            background: `linear-gradient(135deg, var(--app-gradient-start), var(--app-gradient-end))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {initials}
        </div>

        <p className="loader-subtitle text-sm font-medium uppercase tracking-[0.35em] text-muted">
          {SITE.person.jobTitle}
        </p>

        {/* Progress bar: thin line that fills over time */}
        <div className="loader-track w-48 max-w-[80vw] overflow-hidden rounded-full bg-border sm:w-56">
          <div
            className="loader-fill h-full rounded-full bg-primary"
            style={{
              width: "100%",
              transformOrigin: "left",
              animation: `loader-fill ${LOAD_DURATION_MS}ms ease-out forwards`,
              boxShadow: "0 0 20px var(--app-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
