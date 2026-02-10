"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Stage } from "./types";

export default function Background({ stage }: { stage: Stage }) {
  const warm = stage === "reveal";

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/background.webp"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />

      {/* Warm color overlay on reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[rgba(255,200,100,0.15)]"
        animate={{ opacity: warm ? 1 : 0 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
