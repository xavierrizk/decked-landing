"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InstagramIcon from "./InstagramIcon";

const APP_URL = "https://decked-frontend.onrender.com";
const INSTAGRAM_URL = "https://www.instagram.com/deckd.app/";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Concentric circle mark — matches main site */}
      <div className="relative w-6 h-6 flex-shrink-0">
        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, #5A6470, #00D9FF)' }} />
        <div className="absolute inset-[3.5px] rounded-full bg-[#0a0a0a]" />
        <div className="absolute inset-[7px] rounded-full" style={{ background: 'linear-gradient(135deg, #00D9FF, #FF006E)' }} />
        <div className="absolute inset-[9.5px] rounded-full bg-[#0a0a0a]" />
      </div>
      <span
        className="text-sm font-black tracking-tight leading-none"
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          background: 'linear-gradient(135deg, #F5F5F5 30%, #00D9FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        DECK&apos;D
      </span>
    </div>
  );
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DECK'D on Instagram"
            className="text-gray-400 hover:text-[#FF006E] transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </Link>
          <Link
            href={APP_URL}
            className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href={APP_URL}
            className="text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.35)]"
            style={{ background: "linear-gradient(135deg, #00D9FF, #FF006E)" }}
          >
            Join DECK&apos;D
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
