"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    emoji: "🎤",
    title: "Went to a concert?",
    description:
      "Rate it on DECK'D. Score the night, write a review, and remember every show you've been to.",
  },
  {
    number: "2",
    emoji: "🎪",
    title: "Checking the Coachella lineup?",
    description:
      "See what the community recommends. Find the must-see sets before you go.",
  },
  {
    number: "3",
    emoji: "🎧",
    title: "Found an amazing DJ set?",
    description:
      "Share it with music fans worldwide and help the best performances rise to the top.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-normal text-white mb-4">
            How DECK'D Works
          </h2>
          <p className="text-gray-400 text-lg">
            However you experience live music.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-[#00D9FF]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #00D9FF, #FF006E)",
                    boxShadow: "0 0 24px rgba(0,217,255,0.2)",
                  }}
                >
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
