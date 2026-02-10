"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { type Stage } from "@/components/types";
import Background from "@/components/background";
import Egg from "@/components/egg";
import Creature from "@/components/creature";
import {
  Fireflies,
  Petals,
  ShellPieces,
  EnergyRing,
  BurstSparkles,
  RevealSparkles,
  WhiteFlash,
} from "@/components/particles";

export default function Home() {
  const [stage, setStage] = useState<Stage>("idle");
  const [crackLevel, setCrackLevel] = useState(0);

  const handleEggClick = useCallback(() => {
    if (stage === "idle") setStage("wobble");
  }, [stage]);

  // Wobble → crack progression
  useEffect(() => {
    if (stage !== "wobble") return;
    const t1 = setTimeout(() => setCrackLevel(1), 1500);
    const t2 = setTimeout(() => setCrackLevel(2), 2500);
    const t3 = setTimeout(() => setCrackLevel(3), 3500);
    const t4 = setTimeout(() => setStage("crack"), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [stage]);

  // Crack → burst
  useEffect(() => {
    if (stage !== "crack") return;
    setCrackLevel(3);
    const t = setTimeout(() => setStage("burst"), 2000);
    return () => clearTimeout(t);
  }, [stage]);

  // Burst → reveal
  useEffect(() => {
    if (stage !== "burst") return;
    const t = setTimeout(() => setStage("reveal"), 1500);
    return () => clearTimeout(t);
  }, [stage]);

  // Reveal toast
  useEffect(() => {
    if (stage !== "reveal") return;
    const t = setTimeout(() => toast.success("A new friend has hatched! 🐣"), 800);
    return () => clearTimeout(t);
  }, [stage]);

  const showShake = stage === "wobble" && crackLevel >= 3;

  return (
    <motion.main
      className="relative w-screen h-screen overflow-hidden select-none"
      animate={
        showShake
          ? {
              x: [0, -3, 4, -2, 3, -4, 2, -3, 4, -2, 0],
              y: [0, 2, -2, 3, -3, 1, -2, 3, -1, 2, 0],
            }
          : { x: 0, y: 0 }
      }
      transition={showShake ? { duration: 0.15, ease: "easeInOut", repeat: Infinity } : {}}
    >
      <Background stage={stage} />

      {/* Ambient particles */}
      <Fireflies visible={stage === "idle" || stage === "wobble"} />
      <Petals visible={stage === "idle" || stage === "wobble"} />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Burst effects */}
        <WhiteFlash visible={stage === "burst"} />

        <div className="relative flex flex-col items-center">
          {/* Shell pieces */}
          {stage === "burst" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <ShellPieces visible />
              <EnergyRing visible />
              <BurstSparkles visible />
            </div>
          )}

          {/* Egg */}
          <AnimatePresence>
            {stage !== "burst" && stage !== "reveal" && (
              <motion.div key="egg" exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <Egg stage={stage} crackLevel={crackLevel} onClick={handleEggClick} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nest + Creature */}
          <AnimatePresence>
            {(stage === "burst" || stage === "reveal") && (
              <motion.div
                key="creature-area"
                className="flex flex-col items-center -mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Creature visible={stage === "reveal"} />
                {stage === "reveal" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <RevealSparkles visible />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tap text */}
          <AnimatePresence>
            {stage === "idle" && (
              <motion.p
                key="tap-text"
                className="mt-8 text-white/80 text-lg font-light tracking-wider drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                Tap the egg
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.main>
  );
}
