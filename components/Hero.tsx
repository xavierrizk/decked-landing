"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Turntable from "./Turntable";

const APP_URL = "https://decked-frontend.onrender.com";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Purple blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none animate-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-16">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm px-4 py-1.5 rounded-full mb-8"
          >
            <span>✦</span>
            <span>For every kind of live music</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6"
          >
            Rate the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              live music
            </span>{" "}
            that moves you
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mb-10"
          >
            Discover concerts, festivals, raves, and DJ sets. Share your
            experience with a community of music lovers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-10"
          >
            <Link
              href={APP_URL}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
            >
              Explore Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={APP_URL}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg"
            >
              Browse Live Music
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-600"
          >
            50k+ Music Lovers · 1000+ Live Events Rated · Free Forever
          </motion.p>
        </div>

        {/* Right: turntable */}
        <div className="flex-shrink-0 hidden md:flex items-center justify-center">
          <Turntable />
        </div>
      </div>
    </section>
  );
}
