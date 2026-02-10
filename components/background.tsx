"use client";

import { type Stage } from "./types";

export default function Background({ stage }: { stage: Stage }) {
  const warm = stage === "reveal";

  return (
    <div
      className="fixed inset-0 transition-all duration-[2000ms]"
      style={{
        background: warm
          ? "linear-gradient(to bottom, #1a1520 0%, #2d1f0e 40%, #1a2e1a 70%, #0f1a0a 100%)"
          : "linear-gradient(to bottom, #0a0a14 0%, #0d1117 30%, #111a0f 60%, #0a0a0a 100%)",
      }}
    >
      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full opacity-40" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i * 37 + 13) % 100}%`}
            cy={`${(i * 23 + 7) % 40}%`}
            r={i % 3 === 0 ? 1.5 : 1}
            fill="white"
            opacity={0.3 + (i % 5) * 0.12}
          />
        ))}
      </svg>

      {/* Clouds */}
      <svg
        className="absolute top-[8%] left-[10%] w-[200px] h-[80px] opacity-15"
        style={{ animation: "cloudDrift 20s ease-in-out infinite alternate" }}
        viewBox="0 0 200 80"
        aria-hidden="true"
      >
        <ellipse cx="80" cy="50" rx="70" ry="25" fill="#8899aa" />
        <ellipse cx="120" cy="40" rx="50" ry="20" fill="#99aabb" />
        <ellipse cx="60" cy="45" rx="40" ry="18" fill="#7788aa" />
      </svg>
      <svg
        className="absolute top-[12%] right-[15%] w-[160px] h-[60px] opacity-10"
        style={{ animation: "cloudDrift 25s ease-in-out infinite alternate-reverse" }}
        viewBox="0 0 160 60"
        aria-hidden="true"
      >
        <ellipse cx="80" cy="35" rx="60" ry="20" fill="#8899aa" />
        <ellipse cx="110" cy="30" rx="40" ry="15" fill="#99aabb" />
      </svg>

      {/* Hills */}
      <svg className="absolute bottom-0 left-0 w-full h-[45%]" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
        {/* Far hill */}
        <ellipse cx="300" cy="400" rx="500" ry="200" fill="#1a2e1a" opacity="0.6" />
        <ellipse cx="750" cy="400" rx="450" ry="180" fill="#162814" opacity="0.5" />
        {/* Near hill */}
        <ellipse cx="500" cy="420" rx="600" ry="160" fill="#1e3a1e" opacity="0.7" />
        <ellipse cx="200" cy="430" rx="400" ry="140" fill="#223d1f" opacity="0.6" />

        {/* Grass tufts */}
        {[...Array(15)].map((_, i) => (
          <g
            key={i}
            style={{
              transformOrigin: `${60 + i * 60}px 350px`,
              animation: `grassSway ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <line
              x1={60 + i * 60}
              y1={350}
              x2={55 + i * 60}
              y2={320}
              stroke="#3a6b3a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1={60 + i * 60}
              y1={350}
              x2={65 + i * 60}
              y2={325}
              stroke="#4a7a4a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Wildflowers - orange */}
        {[120, 340, 580, 780].map((x, i) => (
          <g key={`orange-${i}`}>
            <line x1={x} y1={345} x2={x} y2={325} stroke="#3a6b3a" strokeWidth="1.5" />
            <circle cx={x} cy={322} r={4} fill="#e67e22" />
            <circle cx={x} cy={322} r={2} fill="#f39c12" />
          </g>
        ))}

        {/* Wildflowers - blue */}
        {[200, 450, 670, 890].map((x, i) => (
          <g key={`blue-${i}`}>
            <line x1={x} y1={340} x2={x} y2={318} stroke="#3a6b3a" strokeWidth="1.5" />
            <circle cx={x} cy={315} r={4} fill="#3498db" />
            <circle cx={x} cy={315} r={2} fill="#5dade2" />
          </g>
        ))}
      </svg>

      {/* Ground gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[15%]"
        style={{
          background: "linear-gradient(to bottom, transparent, #0d1a0d)",
        }}
      />
    </div>
  );
}
