"use client";

import { type Stage } from "./types";

export function Fireflies({ visible }: { visible: boolean }) {
  if (!visible) return null;
  const fireflies = [
    { left: "20%", top: "30%", anim: "fireflyDrift0 6s ease-in-out infinite", delay: "0s" },
    { left: "75%", top: "25%", anim: "fireflyDrift1 7s ease-in-out infinite", delay: "1s" },
    { left: "40%", top: "50%", anim: "fireflyDrift2 5s ease-in-out infinite", delay: "2s" },
    { left: "60%", top: "40%", anim: "fireflyDrift0 8s ease-in-out infinite", delay: "3s" },
    { left: "85%", top: "55%", anim: "fireflyDrift1 6s ease-in-out infinite", delay: "0.5s" },
  ];

  return (
    <>
      {fireflies.map((f, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: f.left,
            top: f.top,
            background: "radial-gradient(circle, #ffd54f 0%, transparent 70%)",
            boxShadow: "0 0 6px 2px rgba(255,213,79,0.4)",
            animation: f.anim,
            animationDelay: f.delay,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

export function Petals({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full opacity-0"
          style={{
            left: `${15 + i * 17}%`,
            top: "-10px",
            background: `radial-gradient(ellipse, ${i % 2 === 0 ? "#f8bbd0" : "#f48fb1"} 30%, transparent 70%)`,
            animation: `petalFall ${6 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

export function ShellPieces({ visible }: { visible: boolean }) {
  if (!visible) return null;
  const pieces = [0, 1, 2, 3, 4, 5];
  const colors = ["#e8c87a", "#d4a855", "#c49a3c", "#e8c87a", "#d4a855", "#c49a3c"];

  return (
    <>
      {pieces.map((i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-8px",
            marginTop: "-8px",
            animation: `shellPiece${i} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            animationDelay: `${i * 0.05}s`,
            willChange: "transform, opacity",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <polygon
              points={
                i % 3 === 0
                  ? "2,14 8,1 14,14"
                  : i % 3 === 1
                    ? "1,10 8,1 15,10 8,15"
                    : "3,12 8,2 13,12"
              }
              fill={colors[i]}
              stroke="#c49a3c"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      ))}
    </>
  );
}

export function EnergyRing({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-yellow-300"
      style={{
        animation: "ringExpand 1s ease-out forwards",
        willChange: "transform, opacity",
      }}
    />
  );
}

export function BurstSparkles({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: `sparkle${i} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            animationDelay: `${i * 0.04}s`,
            willChange: "transform, opacity",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 0 L7 4.5 L12 6 L7 7.5 L6 12 L5 7.5 L0 6 L5 4.5 Z" fill="#ffd54f" />
          </svg>
        </div>
      ))}
    </>
  );
}

export function NestBase({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <svg width="160" height="50" viewBox="0 0 160 50" className="relative z-10">
      <ellipse cx="80" cy="25" rx="70" ry="22" fill="#c49a3c" opacity="0.6" />
      <ellipse cx="80" cy="25" rx="60" ry="18" fill="#d4a855" opacity="0.5" />
      <ellipse cx="80" cy="30" rx="55" ry="15" fill="#8d6e3f" opacity="0.4" />
    </svg>
  );
}

export function RevealSparkles({ visible }: { visible: boolean }) {
  if (!visible) return null;
  const positions = [
    { x: -40, y: -50 }, { x: 40, y: -40 }, { x: -50, y: 10 },
    { x: 50, y: 0 }, { x: -20, y: -60 }, { x: 30, y: -55 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            animation: `revealSparkle ${1.5 + i * 0.2}s ease-in-out forwards`,
            animationDelay: `${0.5 + i * 0.15}s`,
            willChange: "transform, opacity",
            opacity: 0,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 12 12">
            <path d="M6 0 L7 4.5 L12 6 L7 7.5 L6 12 L5 7.5 L0 6 L5 4.5 Z" fill="#ffd54f" />
          </svg>
        </div>
      ))}
    </>
  );
}

export function WhiteFlash({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-white pointer-events-none"
      style={{
        animation: "flash 0.6s ease-out forwards",
        willChange: "opacity",
      }}
    />
  );
}
