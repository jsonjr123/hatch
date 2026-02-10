"use client";

import { motion } from "framer-motion";
import { type Stage } from "./types";

export default function Background({ stage }: { stage: Stage }) {
  const warm = stage === "reveal";

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/background.svg"
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
      />

      {/* Warm color overlay on reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(255, 200, 100, 0.15)" }}
        animate={{ opacity: warm ? 1 : 0 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
