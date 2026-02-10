"use client";

export default function Creature({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div
      className="relative"
      style={{
        animation: "creatureAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          animation: "creatureBreathe 3s ease-in-out infinite",
          animationDelay: "1s",
          transformOrigin: "center bottom",
        }}
      >
        <svg width="120" height="130" viewBox="0 0 120 130" aria-label="Hatched creature">
          <defs>
            <radialGradient id="bodyGrad" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#80cbc4" />
              <stop offset="100%" stopColor="#4db6ac" />
            </radialGradient>
          </defs>

          {/* Body */}
          <ellipse cx="60" cy="85" rx="38" ry="40" fill="url(#bodyGrad)" />

          {/* Belly */}
          <ellipse cx="60" cy="95" rx="24" ry="25" fill="#b2dfdb" opacity="0.5" />

          {/* Head */}
          <circle cx="60" cy="50" r="30" fill="url(#bodyGrad)" />

          {/* Eyes */}
          <g style={{ animation: "creatureBlink 4s ease-in-out infinite", transformOrigin: "47px 47px" }}>
            <ellipse cx="47" cy="47" rx="9" ry="10" fill="white" />
            <ellipse cx="49" cy="48" rx="5" ry="6" fill="#263238" />
            <circle cx="51" cy="45" r="2" fill="white" />
          </g>
          <g style={{ animation: "creatureBlink 4s ease-in-out infinite", animationDelay: "0.1s", transformOrigin: "73px 47px" }}>
            <ellipse cx="73" cy="47" rx="9" ry="10" fill="white" />
            <ellipse cx="71" cy="48" rx="5" ry="6" fill="#263238" />
            <circle cx="73" cy="45" r="2" fill="white" />
          </g>

          {/* Cheeks */}
          <circle cx="38" cy="58" r="6" fill="#f48fb1" opacity="0.3" />
          <circle cx="82" cy="58" r="6" fill="#f48fb1" opacity="0.3" />

          {/* Mouth */}
          <path d="M55 60 Q60 65 65 60" fill="none" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" />

          {/* Small wings */}
          <ellipse cx="22" cy="78" rx="12" ry="8" fill="#80cbc4" opacity="0.7" transform="rotate(-20, 22, 78)" />
          <ellipse cx="98" cy="78" rx="12" ry="8" fill="#80cbc4" opacity="0.7" transform="rotate(20, 98, 78)" />

          {/* Tiny feet */}
          <ellipse cx="48" cy="122" rx="8" ry="4" fill="#4db6ac" />
          <ellipse cx="72" cy="122" rx="8" ry="4" fill="#4db6ac" />
        </svg>
      </div>
    </div>
  );
}
