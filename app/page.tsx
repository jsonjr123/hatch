"use client";

import { useState, useEffect, useCallback } from "react";
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
  NestBase,
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
    <main
      className="relative w-screen h-screen overflow-hidden select-none"
      style={{
        animation: showShake ? "shake 0.15s ease-in-out infinite" : undefined,
      }}
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
          <Egg stage={stage} crackLevel={crackLevel} onClick={handleEggClick} />

          {/* Nest + Creature */}
          {(stage === "burst" || stage === "reveal") && (
            <div className="flex flex-col items-center -mt-4">
              <Creature visible={stage === "reveal"} />
              <NestBase visible />
              {stage === "reveal" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <RevealSparkles visible />
                </div>
              )}
            </div>
          )}

          {/* Tap text */}
          {stage === "idle" && (
            <p
              className="mt-8 text-white/80 text-lg font-light tracking-wider drop-shadow-md"
              style={{ animation: "textPulse 2s ease-in-out infinite" }}
            >
              Tap the egg
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
