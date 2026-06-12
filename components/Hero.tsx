"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const APP_URL = "https://decked-app.onrender.com";

const floatingCards = [
  { title: "Ben UFO at Fabric", rating: "★★★★★", delay: 0 },
  { title: "Objekt b2b Dj Stingray", rating: "★★★★½", delay: 1.5 },
  { title: "Surgeon at Berghain", rating: "★★★★★", delay: 3 },
];

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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm px-4 py-1.5 rounded-full mb-8"
        >
          <span>✦</span>
          <span>Built for ravers, by ravers</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6"
        >
          Rate the Sets That{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Decked
          </span>{" "}
          You
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Discover, rate, and share your favorite DJ sets with a community of
          ravers.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href={APP_URL}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
          >
            Join Decked — It&apos;s Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={APP_URL}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg"
          >
            Explore Sets
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
          500+ Sets Rated · 100+ DJs · Free Forever
        </motion.p>
      </div>

      {/* Floating cards */}
      <div className="relative z-10 hidden md:flex items-end justify-center gap-6 pb-16 mt-4">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            className="animate-float bg-[#111114] border border-white/10 rounded-2xl p-4 text-sm w-52"
            style={{ animationDelay: `${card.delay}s` }}
          >
            <p className="text-white font-semibold mb-1">{card.title}</p>
            <p className="text-yellow-400 text-base">{card.rating}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
