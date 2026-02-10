"use client";

import { type Stage } from "./types";

interface EggProps {
  stage: Stage;
  crackLevel: number; // 0-3
  onClick: () => void;
}

export default function Egg({ stage, crackLevel, onClick }: EggProps) {
  if (stage === "burst" || stage === "reveal") return null;

  const isIdle = stage === "idle";
  const isWobble = stage === "wobble";
  const isCrack = stage === "crack";

  const wobbleAnim = isWobble
    ? crackLevel >= 2
      ? "wobble3 0.3s ease-in-out infinite"
      : crackLevel >= 1
        ? "wobble2 0.4s ease-in-out infinite"
        : "wobble1 0.6s ease-in-out infinite"
    : isCrack
      ? "energyPulse 0.4s ease-in-out infinite"
      : "float 3s ease-in-out infinite";

  const glowIntensity =
    isCrack ? 60 : crackLevel >= 2 ? 40 : crackLevel >= 1 ? 25 : 15;
  const glowColor =
    isCrack || crackLevel >= 2 ? "rgba(255,213,79,0.8)" : "rgba(255,213,79,0.4)";

  return (
    <div
      className="relative cursor-pointer"
      style={{
        animation: wobbleAnim,
        willChange: "transform",
      }}
      onClick={isIdle ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (isIdle && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 300 + glowIntensity,
          height: 340 + glowIntensity,
          background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
          animation: isIdle ? "glowPulse 2.5s ease-in-out infinite" : undefined,
          willChange: "transform, opacity",
        }}
      />

      {/* Egg SVG */}
      <svg
        width="220"
        height="280"
        viewBox="0 0 140 180"
        className="relative z-10"
        aria-label="Egg"
      >
        {/* Main egg shape */}
        <defs>
          <radialGradient id="eggGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#f0d78c" />
            <stop offset="50%" stopColor="#e8c87a" />
            <stop offset="100%" stopColor="#c49a3c" />
          </radialGradient>
          <radialGradient id="crackGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" />
            <stop offset="100%" stopColor="#ffd54f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Shell */}
        <ellipse cx="70" cy="95" rx="58" ry="75" fill="url(#eggGrad)" />

        {/* Shell patterns */}
        <ellipse cx="70" cy="95" rx="58" ry="75" fill="none" stroke="#d4a855" strokeWidth="1" opacity="0.3" />
        <path d="M35 70 Q50 65 65 72 Q80 78 95 70" fill="none" stroke="#d4a855" strokeWidth="1.5" opacity="0.25" />
        <path d="M30 95 Q50 88 70 95 Q90 102 110 95" fill="none" stroke="#d4a855" strokeWidth="1.5" opacity="0.2" />
        <path d="M38 120 Q55 115 70 120 Q85 125 102 118" fill="none" stroke="#c49a3c" strokeWidth="1.5" opacity="0.25" />

        {/* Spots */}
        <circle cx="45" cy="75" r="5" fill="#d4a855" opacity="0.3" />
        <circle cx="85" cy="80" r="6" fill="#c49a3c" opacity="0.2" />
        <circle cx="55" cy="110" r="4" fill="#d4a855" opacity="0.25" />
        <circle cx="90" cy="105" r="5" fill="#c49a3c" opacity="0.2" />

        {/* Highlight */}
        <ellipse cx="52" cy="60" rx="15" ry="20" fill="white" opacity="0.12" />

        {/* Crack lines - appear based on crackLevel */}
        <g style={{ transition: "opacity 0.5s ease-in-out", opacity: crackLevel >= 1 ? 1 : 0 }}>
          <path d="M65 45 L60 60 L68 70 L62 80" fill="none" stroke="#fff9c4" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g style={{ transition: "opacity 0.5s ease-in-out", opacity: crackLevel >= 2 ? 1 : 0 }}>
          <path d="M78 50 L82 65 L75 75 L80 85" fill="none" stroke="#fff9c4" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 70 L50 80 L58 88" fill="none" stroke="#ffd54f" strokeWidth="1.5" strokeLinecap="round" />
          {/* Light leak */}
          <ellipse cx="68" cy="72" rx="8" ry="6" fill="url(#crackGlow)" opacity="0.6" />
        </g>
        <g style={{ transition: "opacity 0.5s ease-in-out", opacity: crackLevel >= 3 ? 1 : 0 }}>
          <path d="M45 55 L50 70 L42 82 L48 95" fill="none" stroke="#fff9c4" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M90 60 L85 75 L92 85" fill="none" stroke="#fff9c4" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 85 L70 90 L65 100" fill="none" stroke="#ffd54f" strokeWidth="2" strokeLinecap="round" />
          {/* More light leaks */}
          <ellipse cx="65" cy="70" rx="12" ry="10" fill="url(#crackGlow)" opacity="0.8" />
          <ellipse cx="80" cy="80" rx="8" ry="6" fill="url(#crackGlow)" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
