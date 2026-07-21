"use client";

import { motion } from "framer-motion";

/**
 * Layered product screenshots for the hero.
 * Primary = set detail page (rating card, star breakdown).
 * Secondary = a community review with tri-color star ratings, peeking behind.
 *
 * Image files live in /public and are dropped in by hand:
 *   /public/app-set-detail.png
 *   /public/app-review.png
 */
export default function ProductShot() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto [perspective:1800px]">
      {/* Cyan → pink glow wash behind the stack */}
      <div
        className="absolute -inset-10 pointer-events-none blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 30%, rgba(0,217,255,0.28) 0%, transparent 70%), radial-gradient(55% 55% at 75% 70%, rgba(255,0,110,0.26) 0%, transparent 70%)",
        }}
      />

      {/* Secondary — review card, peeking behind top-right */}
      <motion.div
        initial={{ opacity: 0, y: 24, x: 24 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute -top-8 -right-2 w-[78%] hidden lg:block"
        style={{ transform: "rotateY(-16deg) rotateX(6deg) rotate(3deg)" }}
      >
        <BrowserFrame>
          <img
            src="/app-review.png"
            alt="A community review on DECK'D with star ratings and a video clip"
            className="w-full block"
          />
        </BrowserFrame>
      </motion.div>

      {/* Primary — set detail page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
        style={{ transform: "rotateY(-12deg) rotateX(4deg)" }}
      >
        <BrowserFrame>
          <img
            src="/app-set-detail.png"
            alt="A DJ set rated 5.0 on DECK'D with performance, venue, and crowd scores"
            className="w-full block"
          />
        </BrowserFrame>
      </motion.div>
    </div>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/60 ring-1 ring-white/[0.04]">
      {/* Top chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF006E]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]/70" />
      </div>
      {children}
    </div>
  );
}
