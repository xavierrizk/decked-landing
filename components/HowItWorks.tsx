"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    emoji: "🎵",
    title: "Create Your Account",
    description:
      "Sign up free in 30 seconds. No DJ knowledge required — just a love for good music.",
  },
  {
    number: "2",
    emoji: "🔍",
    title: "Browse & Discover",
    description:
      "Explore DJ profiles, search for sets, find artists from your favourite clubs and festivals.",
  },
  {
    number: "3",
    emoji: "⭐",
    title: "Rate & Review",
    description:
      "Leave star ratings and written reviews on any set. Build your taste profile.",
  },
  {
    number: "4",
    emoji: "👥",
    title: "Connect & Follow",
    description:
      "Follow DJs and friends. See their ratings, discover sets through their activity.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            How Decked Works
          </h2>
          <p className="text-gray-400 text-lg">
            Four simple steps to your next favourite set.
          </p>
        </motion.div>

        <div className="relative">
          {/* Dashed connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-purple-800/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full w-12 h-12 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-purple-900/40">
                  {step.number}
                </div>
                <div className="text-2xl mb-3">{step.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
