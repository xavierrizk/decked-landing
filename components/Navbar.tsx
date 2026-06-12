"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const APP_URL = "https://decked-frontend.onrender.com";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-purple-400 text-lg">✦</span>
          <span className="text-white font-black text-xl tracking-widest uppercase">
            Decked
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href={APP_URL}
            className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href={APP_URL}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-105"
          >
            Join Decked
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
