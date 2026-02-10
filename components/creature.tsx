"use client";

import { motion } from "framer-motion";

export default function Creature({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 8, stiffness: 100 }}
    >
      <motion.div
        animate={{ scaleY: [1, 1.03, 1], scaleX: [1, 0.98, 1] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        style={{ transformOrigin: "center bottom" }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/assets/dragon.png"
            alt="Baby dragon"
            style={{
              width: 200,
              imageRendering: "pixelated",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
