"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { type Stage } from "./types";

interface EggProps {
  stage: Stage;
  crackLevel: number;
  onClick: () => void;
}

const containerVariants: Variants = {
  idle: {
    y: [0, -12, 0],
    rotate: 0,
    scale: 1,
    transition: { y: { duration: 3, ease: "easeInOut", repeat: Infinity } },
  },
  wobble1: {
    rotate: [0, 3, -3, 0],
    transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
  },
  wobble2: {
    rotate: [0, 6, -5, 7, -6, 0],
    transition: { duration: 0.4, ease: "easeInOut", repeat: Infinity },
  },
  wobble3: {
    rotate: [0, 10, -12, 14, -10, 8, -6, 0],
    transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity },
  },
  crack: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.4, ease: "easeInOut", repeat: Infinity },
  },
};

function getVariant(stage: Stage, crackLevel: number): string {
  if (stage === "crack") return "crack";
  if (stage === "wobble") {
    if (crackLevel >= 2) return "wobble3";
    if (crackLevel >= 1) return "wobble2";
    return "wobble1";
  }
  return "idle";
}

export default function Egg({ stage, crackLevel, onClick }: EggProps) {
  if (stage === "burst" || stage === "reveal") return null;

  const isIdle = stage === "idle";
  const isCrack = stage === "crack";
  const glowIntensity =
    isCrack ? 60 : crackLevel >= 2 ? 40 : crackLevel >= 1 ? 25 : 15;
  const glowColor =
    isCrack || crackLevel >= 2
      ? "rgba(255,213,79,0.8)"
      : "rgba(255,213,79,0.4)";

  return (
    <motion.div
      className="relative cursor-pointer"
      variants={containerVariants}
      animate={getVariant(stage, crackLevel)}
      onClick={isIdle ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (isIdle && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 420 + glowIntensity,
          height: 480 + glowIntensity,
          background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={
          isIdle
            ? { opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }
            : { opacity: 1, scale: 1 }
        }
        transition={
          isIdle
            ? { duration: 2.5, ease: "easeInOut", repeat: Infinity }
            : {}
        }
      />

      {/* Egg image from SVG asset */}
      <div className="relative z-10" style={{ width: 320, height: 400 }}>
        <Image
          src="/assets/egg.svg"
          alt="Egg"
          width={320}
          height={400}
          priority
          draggable={false}
        />

        {/* Crack overlays — rendered on top of the egg image */}
        <svg
          className="absolute inset-0 z-20 pointer-events-none"
          width="320"
          height="400"
          viewBox="0 0 140 180"
        >
          <defs>
            <radialGradient id="crackGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff9c4" />
              <stop offset="100%" stopColor="#ffd54f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Crack level 1 */}
          <g
            style={{
              transition: "opacity 0.5s ease-in-out",
              opacity: crackLevel >= 1 ? 1 : 0,
            }}
          >
            <path
              d="M65 45 L60 60 L68 70 L62 80"
              fill="none"
              stroke="#fff9c4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Crack level 2 */}
          <g
            style={{
              transition: "opacity 0.5s ease-in-out",
              opacity: crackLevel >= 2 ? 1 : 0,
            }}
          >
            <path
              d="M78 50 L82 65 L75 75 L80 85"
              fill="none"
              stroke="#fff9c4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M55 70 L50 80 L58 88"
              fill="none"
              stroke="#ffd54f"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <ellipse
              cx="68"
              cy="72"
              rx="8"
              ry="6"
              fill="url(#crackGlow)"
              opacity="0.6"
            />
          </g>

          {/* Crack level 3 */}
          <g
            style={{
              transition: "opacity 0.5s ease-in-out",
              opacity: crackLevel >= 3 ? 1 : 0,
            }}
          >
            <path
              d="M45 55 L50 70 L42 82 L48 95"
              fill="none"
              stroke="#fff9c4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M90 60 L85 75 L92 85"
              fill="none"
              stroke="#fff9c4"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 85 L70 90 L65 100"
              fill="none"
              stroke="#ffd54f"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse
              cx="65"
              cy="70"
              rx="12"
              ry="10"
              fill="url(#crackGlow)"
              opacity="0.8"
            />
            <ellipse
              cx="80"
              cy="80"
              rx="8"
              ry="6"
              fill="url(#crackGlow)"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
