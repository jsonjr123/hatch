"use client";

import Image from "next/image";
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
        className="origin-bottom"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/assets/dino.webp"
            alt="Baby dinosaur"
            width={400}
            height={360}
            className="drop-shadow-lg"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
