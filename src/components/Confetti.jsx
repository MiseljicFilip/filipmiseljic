import { useState } from "react";

const COLORS = ["#3b82f6", "#22d3ee", "#a855f7", "#ec4899", "#f59e0b", "#10b981"];
const PARTICLE_COUNT = 48;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function Confetti() {
  const [particles] = useState(() =>
    Array.from({ length: PARTICLE_COUNT }, () => ({
      id: Math.random().toString(36).slice(2),
      x: randomBetween(10, 90),
      delay: randomBetween(0, 400),
      duration: randomBetween(1200, 2200),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(6, 12),
      rotation: randomBetween(0, 360),
      drift: randomBetween(-30, 30),
    }))
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[70] overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            top: "-20px",
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
            transform: `rotate(${p.rotation}deg)`,
            "--confetti-drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
