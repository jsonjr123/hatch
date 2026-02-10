"use client";

import { type Stage } from "./types";

export default function Background({ stage }: { stage: Stage }) {
  const warm = stage === "reveal";

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Sky */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms]"
        style={{
          background: warm
            ? "linear-gradient(to bottom, #3a7bc8 0%, #5a9fd4 25%, #8ec5e0 50%, #c8e6f0 70%, #e8f0e0 100%)"
            : "linear-gradient(to bottom, #2e6db4 0%, #4a8fcf 25%, #7ab8e0 50%, #b0d8ec 70%, #d8ece4 100%)",
        }}
      />

      {/* Towering cumulonimbus cloud (right side, Ghibli-style) */}
      <svg
        className="absolute -right-[5%] top-[2%] w-[45%] h-[75%] opacity-95"
        viewBox="0 0 400 500"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cloudLit" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f0f4f8" />
            <stop offset="100%" stopColor="#dce8f0" />
          </radialGradient>
          <radialGradient id="cloudShadow" cx="50%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#e8eef4" />
            <stop offset="100%" stopColor="#c8d8e4" />
          </radialGradient>
        </defs>
        {/* Base of tower */}
        <ellipse cx="200" cy="420" rx="180" ry="60" fill="url(#cloudShadow)" />
        <ellipse cx="200" cy="380" rx="160" ry="55" fill="url(#cloudLit)" />
        <ellipse cx="200" cy="330" rx="140" ry="50" fill="url(#cloudLit)" />
        <ellipse cx="200" cy="280" rx="120" ry="48" fill="#ffffff" />
        <ellipse cx="200" cy="230" rx="105" ry="45" fill="#ffffff" />
        <ellipse cx="200" cy="180" rx="90" ry="42" fill="#ffffff" />
        <ellipse cx="200" cy="135" rx="75" ry="38" fill="#ffffff" />
        <ellipse cx="200" cy="95" rx="60" ry="32" fill="#fafcff" />
        <ellipse cx="200" cy="65" rx="42" ry="25" fill="#fafcff" />
      </svg>

      {/* Scattered clouds (left and center) */}
      <svg
        className="absolute top-[10%] left-[3%] w-[30%] h-[15%] opacity-90"
        style={{ animation: "cloudDrift 30s ease-in-out infinite alternate" }}
        viewBox="0 0 300 100"
        aria-hidden="true"
      >
        <ellipse cx="120" cy="55" rx="100" ry="35" fill="#f0f6fa" />
        <ellipse cx="170" cy="45" rx="80" ry="30" fill="white" />
        <ellipse cx="80" cy="50" rx="70" ry="28" fill="#f5f9fc" />
        <ellipse cx="140" cy="60" rx="60" ry="22" fill="white" />
      </svg>

      <svg
        className="absolute top-[18%] left-[25%] w-[20%] h-[10%] opacity-70"
        style={{ animation: "cloudDrift 35s ease-in-out infinite alternate-reverse" }}
        viewBox="0 0 200 80"
        aria-hidden="true"
      >
        <ellipse cx="100" cy="40" rx="80" ry="28" fill="#f0f6fa" />
        <ellipse cx="130" cy="35" rx="55" ry="22" fill="white" />
        <ellipse cx="70" cy="42" rx="50" ry="20" fill="white" />
      </svg>

      {/* Thin wispy clouds in upper sky */}
      <svg className="absolute top-[5%] left-[15%] w-[50%] h-[8%] opacity-40" viewBox="0 0 500 40" aria-hidden="true">
        <path d="M0 25 Q50 15 120 22 Q200 10 280 20 Q360 12 440 22 Q480 18 500 20" fill="none" stroke="#c8dce8" strokeWidth="3" />
        <path d="M30 30 Q100 20 180 28 Q250 18 340 26 Q400 20 470 25" fill="none" stroke="#d0e4f0" strokeWidth="2" />
      </svg>

      {/* Far distant meadow/horizon line */}
      <svg className="absolute bottom-0 left-0 w-full h-[55%]" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
        {/* Horizon glow/haze */}
        <rect y="0" width="1200" height="60" fill="url(#horizonHaze)" opacity="0.3" />
        <defs>
          <linearGradient id="horizonHaze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8ece4" stopOpacity="0" />
            <stop offset="100%" stopColor="#a8d4a0" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="meadowFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7ab856" />
            <stop offset="100%" stopColor="#5a9e3a" />
          </linearGradient>
          <linearGradient id="meadowMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a9e3a" />
            <stop offset="100%" stopColor="#4a8a30" />
          </linearGradient>
          <linearGradient id="meadowNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d7a28" />
            <stop offset="100%" stopColor="#2d5e1e" />
          </linearGradient>
        </defs>

        {/* Far meadow - gentle slope with orange flower dots */}
        <path d="M0 100 Q300 70 600 90 Q900 70 1200 95 L1200 250 L0 250Z" fill="url(#meadowFar)" />
        {/* Orange flower clusters on far meadow */}
        {[80, 160, 240, 330, 420, 510, 600, 690, 780, 870, 960, 1050, 1140].map((x, i) => (
          <g key={`far-flowers-${i}`}>
            <circle cx={x} cy={120 + (i % 3) * 8 - 10} r={2.5} fill="#e8a030" opacity="0.7" />
            <circle cx={x + 12} cy={125 + (i % 2) * 6 - 10} r={2} fill="#d89020" opacity="0.6" />
            <circle cx={x + 6} cy={130 + (i % 4) * 4 - 10} r={2.5} fill="#e8a030" opacity="0.5" />
          </g>
        ))}
        {/* Scattered white/small flowers */}
        {[140, 350, 550, 750, 950, 1100].map((x, i) => (
          <circle key={`white-far-${i}`} cx={x} cy={115 + (i % 3) * 10} r={1.5} fill="white" opacity="0.4" />
        ))}

        {/* Mid meadow */}
        <path d="M0 200 Q200 180 500 195 Q800 175 1200 200 L1200 380 L0 380Z" fill="url(#meadowMid)" />
        {/* More dense orange flowers */}
        {[60, 120, 200, 280, 360, 440, 530, 620, 710, 800, 880, 960, 1040, 1120].map((x, i) => (
          <g key={`mid-flowers-${i}`}>
            <circle cx={x} cy={220 + (i % 3) * 10} r={3} fill="#e89030" opacity="0.8" />
            <circle cx={x + 15} cy={225 + (i % 2) * 8} r={3.5} fill="#d88020" opacity="0.7" />
            <circle cx={x + 8} cy={235 + (i % 4) * 5} r={2.5} fill="#e8a040" opacity="0.6" />
            <circle cx={x - 5} cy={240 + (i % 3) * 6} r={3} fill="#e89030" opacity="0.5" />
          </g>
        ))}

        {/* Near meadow / foreground - darker, more detailed */}
        <path d="M0 340 Q400 320 800 335 Q1000 325 1200 340 L1200 500 L0 500Z" fill="url(#meadowNear)" />

        {/* Foreground foliage - large dark leaves */}
        {[30, 150, 300, 500, 700, 900, 1050].map((x, i) => (
          <g key={`foliage-${i}`} opacity="0.8">
            <path
              d={`M${x} 500 Q${x - 15} 450 ${x - 25} 410 Q${x - 10} 400 ${x} 420 Q${x + 10} 400 ${x + 25} 410 Q${x + 15} 450 ${x} 500Z`}
              fill="#2a5018"
            />
            <path
              d={`M${x + 30} 500 Q${x + 20} 460 ${x + 15} 430 Q${x + 30} 425 ${x + 40} 440 Q${x + 38} 465 ${x + 30} 500Z`}
              fill="#1e4012"
            />
          </g>
        ))}

        {/* Foreground orange flowers (larger) */}
        {[80, 180, 320, 460, 600, 750, 880, 1020, 1140].map((x, i) => (
          <g key={`near-orange-${i}`}>
            <line x1={x} y1={420} x2={x} y2={390} stroke="#3a6b2a" strokeWidth="2" />
            <circle cx={x} cy={387} r={6} fill="#e87020" />
            <circle cx={x} cy={387} r={3} fill="#f0a040" />
            <circle cx={x + 14} cy={400} r={5} fill="#d87020" opacity="0.8" />
            <circle cx={x + 14} cy={400} r={2.5} fill="#e89030" />
          </g>
        ))}

        {/* Foreground blue flowers */}
        {[130, 280, 430, 580, 820, 970, 1100].map((x, i) => (
          <g key={`near-blue-${i}`}>
            <line x1={x} y1={425} x2={x} y2={395} stroke="#3a6b2a" strokeWidth="1.5" />
            <circle cx={x} cy={392} r={5} fill="#4a7ec8" />
            <circle cx={x} cy={392} r={2.5} fill="#6a9ee0" />
            {/* Extra petals */}
            <circle cx={x - 4} cy={390} r={3} fill="#5a8ed4" opacity="0.7" />
            <circle cx={x + 4} cy={390} r={3} fill="#5a8ed4" opacity="0.7" />
          </g>
        ))}

        {/* White daisies scattered */}
        {[220, 520, 680, 940].map((x, i) => (
          <g key={`daisy-${i}`}>
            <line x1={x} y1={430} x2={x} y2={405} stroke="#3a6b2a" strokeWidth="1.5" />
            <circle cx={x} cy={402} r={4} fill="white" opacity="0.9" />
            <circle cx={x} cy={402} r={2} fill="#f0d040" />
          </g>
        ))}

        {/* Grass blades in foreground */}
        {[...Array(25)].map((_, i) => {
          const x = 20 + i * 48;
          return (
            <g
              key={`grass-${i}`}
              style={{
                transformOrigin: `${x}px 500px`,
                animation: `grassSway ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <path
                d={`M${x} 500 Q${x - 8} 460 ${x - 12} 420`}
                fill="none"
                stroke="#4a8a30"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d={`M${x} 500 Q${x + 6} 455 ${x + 10} 415`}
                fill="none"
                stroke="#3d7a28"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
