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
        <svg width="160" height="180" viewBox="0 0 160 180" aria-label="Baby dragon">
          <defs>
            <radialGradient id="dragonBody" cx="40%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#5ec4a0" />
              <stop offset="50%" stopColor="#3aaa80" />
              <stop offset="100%" stopColor="#2d8a68" />
            </radialGradient>
            <radialGradient id="dragonBelly" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#c8e8a0" />
              <stop offset="100%" stopColor="#a0d880" />
            </radialGradient>
            <radialGradient id="dragonHead" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#60c8a4" />
              <stop offset="50%" stopColor="#40b088" />
              <stop offset="100%" stopColor="#309870" />
            </radialGradient>
          </defs>

          {/* Tail - curls behind, swaying */}
          <g style={{ animation: "tailWag 2s ease-in-out infinite", transformOrigin: "115px 130px" }}>
            <path
              d="M115 130 Q135 125 145 110 Q155 95 150 80 Q147 72 140 75"
              fill="none"
              stroke="#2d8a68"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Tail spade tip */}
            <path
              d="M140 75 L135 65 L145 70 L150 60 L148 73 L140 75Z"
              fill="#2d8a68"
            />
          </g>

          {/* Back leg */}
          <ellipse cx="95" cy="148" rx="14" ry="8" fill="#2d8a68" />
          <ellipse cx="65" cy="148" rx="14" ry="8" fill="#309870" />

          {/* Body */}
          <ellipse cx="80" cy="115" rx="40" ry="38" fill="url(#dragonBody)" />

          {/* Belly patch */}
          <ellipse cx="80" cy="122" rx="25" ry="24" fill="url(#dragonBelly)" opacity="0.7" />

          {/* Belly lines */}
          <path d="M65 112 Q80 115 95 112" fill="none" stroke="#88c880" strokeWidth="1" opacity="0.5" />
          <path d="M63 120 Q80 123 97 120" fill="none" stroke="#88c880" strokeWidth="1" opacity="0.5" />
          <path d="M65 128 Q80 131 95 128" fill="none" stroke="#88c880" strokeWidth="1" opacity="0.5" />

          {/* Left wing */}
          <g style={{ animation: "wingFlutter 2.5s ease-in-out infinite", transformOrigin: "45px 95px" }}>
            <path
              d="M45 95 Q20 70 15 50 Q18 55 25 52 Q22 40 28 45 Q30 32 35 42 Q40 55 45 75Z"
              fill="#40b088"
              opacity="0.85"
            />
            <path
              d="M45 95 Q20 70 15 50"
              fill="none"
              stroke="#2d8a68"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>

          {/* Right wing */}
          <g style={{ animation: "wingFlutter 2.5s ease-in-out infinite alternate-reverse", transformOrigin: "115px 95px" }}>
            <path
              d="M115 95 Q140 70 145 50 Q142 55 135 52 Q138 40 132 45 Q130 32 125 42 Q120 55 115 75Z"
              fill="#40b088"
              opacity="0.85"
            />
            <path
              d="M115 95 Q140 70 145 50"
              fill="none"
              stroke="#2d8a68"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>

          {/* Arms / front legs */}
          <g>
            <path d="M52 115 Q42 120 38 128 Q36 132 40 133 L48 130 Q50 125 52 118Z" fill="#309870" />
            <path d="M108 115 Q118 120 122 128 Q124 132 120 133 L112 130 Q110 125 108 118Z" fill="#309870" />
            {/* Tiny claws */}
            <circle cx="40" cy="133" r="2" fill="#2d8a68" />
            <circle cx="44" cy="132" r="2" fill="#2d8a68" />
            <circle cx="120" cy="133" r="2" fill="#2d8a68" />
            <circle cx="116" cy="132" r="2" fill="#2d8a68" />
          </g>

          {/* Head */}
          <ellipse cx="80" cy="68" rx="32" ry="30" fill="url(#dragonHead)" />

          {/* Head bumps / horns */}
          <ellipse cx="58" cy="42" rx="5" ry="8" fill="#309870" transform="rotate(-15, 58, 42)" />
          <ellipse cx="102" cy="42" rx="5" ry="8" fill="#309870" transform="rotate(15, 102, 42)" />
          {/* Horn tips */}
          <ellipse cx="56" cy="36" rx="3" ry="4" fill="#c8e8a0" transform="rotate(-15, 56, 36)" />
          <ellipse cx="104" cy="36" rx="3" ry="4" fill="#c8e8a0" transform="rotate(15, 104, 36)" />

          {/* Snout */}
          <ellipse cx="80" cy="78" rx="18" ry="12" fill="#50b890" />

          {/* Nostrils */}
          <ellipse cx="74" cy="76" rx="2.5" ry="2" fill="#2d8a68" />
          <ellipse cx="86" cy="76" rx="2.5" ry="2" fill="#2d8a68" />

          {/* Eyes - big and expressive */}
          <g style={{ animation: "creatureBlink 4s ease-in-out infinite", transformOrigin: "65px 63px" }}>
            <ellipse cx="65" cy="63" rx="11" ry="12" fill="white" />
            <ellipse cx="67" cy="64" rx="7" ry="8" fill="#1a5c3a" />
            <circle cx="69" cy="61" r="3" fill="white" />
            <circle cx="65" cy="67" r="1.5" fill="white" opacity="0.5" />
          </g>
          <g style={{ animation: "creatureBlink 4s ease-in-out infinite", animationDelay: "0.1s", transformOrigin: "95px 63px" }}>
            <ellipse cx="95" cy="63" rx="11" ry="12" fill="white" />
            <ellipse cx="93" cy="64" rx="7" ry="8" fill="#1a5c3a" />
            <circle cx="95" cy="61" r="3" fill="white" />
            <circle cx="91" cy="67" r="1.5" fill="white" opacity="0.5" />
          </g>

          {/* Cheek blush */}
          <ellipse cx="52" cy="75" rx="7" ry="4" fill="#f48fb1" opacity="0.25" />
          <ellipse cx="108" cy="75" rx="7" ry="4" fill="#f48fb1" opacity="0.25" />

          {/* Happy mouth */}
          <path d="M72 82 Q80 88 88 82" fill="none" stroke="#1a5c3a" strokeWidth="1.8" strokeLinecap="round" />

          {/* Spines down the back */}
          <g opacity="0.7">
            <path d="M80 38 L77 30 L83 30Z" fill="#c8e8a0" />
            <path d="M80 42 L76 35 L84 35Z" fill="#a0d880" />
          </g>

          {/* Toe claws on feet */}
          <g opacity="0.8">
            <circle cx="55" cy="154" r="2.5" fill="#2d8a68" />
            <circle cx="61" cy="155" r="2.5" fill="#2d8a68" />
            <circle cx="67" cy="154" r="2.5" fill="#2d8a68" />
            <circle cx="85" cy="154" r="2.5" fill="#2d8a68" />
            <circle cx="91" cy="155" r="2.5" fill="#2d8a68" />
            <circle cx="97" cy="154" r="2.5" fill="#2d8a68" />
          </g>
        </svg>
      </div>
    </div>
  );
}
