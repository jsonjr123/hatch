"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Egg emoji as hero icon */}
        <motion.div
          className="text-7xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          🥚
        </motion.div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Hatch
          </h1>
          <p className="text-slate-400 text-lg text-center max-w-sm">
            Something is waiting to be discovered
          </p>
        </div>

        <motion.button
          onClick={() => router.push("/hatch")}
          className="mt-4 px-8 py-3 rounded-full bg-violet-600 text-white font-medium text-lg
                     hover:bg-violet-500 active:bg-violet-700
                     shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
                     transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get started
        </motion.button>
      </motion.div>
    </main>
  );
}
