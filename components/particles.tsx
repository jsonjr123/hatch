"use client";

import { motion, AnimatePresence } from "framer-motion";

export function Fireflies({ visible }: { visible: boolean }) {
  const fireflies = [
    { left: "20%", top: "30%", dx: [0, 30, -10, 20, 0], dy: [0, -20, -40, -10, 0], opacities: [0.2, 0.8, 0.3, 0.9, 0.2], dur: 6 },
    { left: "75%", top: "25%", dx: [0, -25, 15, -20, 0], dy: [0, -30, -15, -25, 0], opacities: [0.3, 0.7, 0.2, 0.8, 0.3], dur: 7 },
    { left: "40%", top: "50%", dx: [0, 20, -15, 0], dy: [0, -35, -20, 0], opacities: [0.5, 0.2, 0.9, 0.5], dur: 5 },
    { left: "60%", top: "40%", dx: [0, 30, -10, 20, 0], dy: [0, -20, -40, -10, 0], opacities: [0.2, 0.8, 0.3, 0.9, 0.2], dur: 8 },
    { left: "85%", top: "55%", dx: [0, -25, 15, -20, 0], dy: [0, -30, -15, -25, 0], opacities: [0.3, 0.7, 0.2, 0.8, 0.3], dur: 6 },
  ];

  return (
    <AnimatePresence>
      {visible &&
        fireflies.map((f, i) => (
          <motion.div
            key={`firefly-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: f.left,
              top: f.top,
              background: "radial-gradient(circle, #ffd54f 0%, transparent 70%)",
              boxShadow: "0 0 6px 2px rgba(255,213,79,0.4)",
            }}
            initial={{ opacity: f.opacities[0], x: 0, y: 0 }}
            animate={{ x: f.dx, y: f.dy, opacity: f.opacities }}
            exit={{ opacity: 0 }}
            transition={{ duration: f.dur, ease: "easeInOut", repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
    </AnimatePresence>
  );
}

export function Petals({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible &&
        [...Array(5)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${15 + i * 17}%`,
              top: "-10px",
              background: `radial-gradient(ellipse, ${i % 2 === 0 ? "#f8bbd0" : "#f48fb1"} 30%, transparent 70%)`,
            }}
            initial={{ opacity: 0, x: 0, y: -20, rotate: 0 }}
            animate={{ opacity: [0, 0.8, 0.6, 0], x: 60, y: "100vh", rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6 + i * 1.5, ease: "easeInOut", repeat: Infinity, delay: i * 1.2 }}
          />
        ))}
    </AnimatePresence>
  );
}

export function ShellPieces({ visible }: { visible: boolean }) {
  const pieces = [
    { x: -120, y: -180, rotate: -200 },
    { x: 130, y: -160, rotate: 180 },
    { x: -160, y: -60, rotate: -150 },
    { x: 170, y: -40, rotate: 220 },
    { x: -80, y: -200, rotate: -260 },
    { x: 90, y: -190, rotate: 240 },
  ];
  const colors = ["#e8c87a", "#d4a855", "#c49a3c", "#e8c87a", "#d4a855", "#c49a3c"];

  return (
    <AnimatePresence>
      {visible &&
        pieces.map((p, i) => (
          <motion.div
            key={`shell-${i}`}
            className="absolute"
            style={{ left: "50%", top: "50%", marginLeft: "-8px", marginTop: "-8px" }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            animate={{ x: p.x, y: p.y, rotate: p.rotate, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.05 }}
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
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export function EnergyRing({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-yellow-300"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}

export function BurstSparkles({ visible }: { visible: boolean }) {
  const targets = [
    { x: -100, y: -140 },
    { x: 80, y: -160 },
    { x: -140, y: -40 },
    { x: 150, y: -20 },
    { x: -60, y: -180 },
    { x: 120, y: -100 },
    { x: -130, y: -120 },
    { x: 40, y: -190 },
  ];

  return (
    <AnimatePresence>
      {visible &&
        targets.map((t, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: t.x, y: t.y, scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.04 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M6 0 L7 4.5 L12 6 L7 7.5 L6 12 L5 7.5 L0 6 L5 4.5 Z" fill="#ffd54f" />
            </svg>
          </motion.div>
        ))}
    </AnimatePresence>
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
  const positions = [
    { x: -40, y: -50 }, { x: 40, y: -40 }, { x: -50, y: 10 },
    { x: 50, y: 0 }, { x: -20, y: -60 }, { x: 30, y: -55 },
  ];

  return (
    <AnimatePresence>
      {visible &&
        positions.map((p, i) => (
          <motion.div
            key={`reveal-sparkle-${i}`}
            className="absolute"
            style={{
              left: `calc(50% + ${p.x}px)`,
              top: `calc(50% + ${p.y}px)`,
            }}
            initial={{ scale: 0, rotate: 0, opacity: 1 }}
            animate={{ scale: [0, 1.2, 0], rotate: [0, 180, 360], opacity: [1, 0.8, 0] }}
            transition={{ duration: 1.5 + i * 0.2, ease: "easeInOut", delay: 0.5 + i * 0.15 }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12">
              <path d="M6 0 L7 4.5 L12 6 L7 7.5 L6 12 L5 7.5 L0 6 L5 4.5 Z" fill="#ffd54f" />
            </svg>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export function WhiteFlash({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-white pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}
