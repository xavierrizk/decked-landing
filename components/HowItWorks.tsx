"use client";

import { motion } from "framer-motion";
import { Ticket, ClipboardList, Search } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Ticket,
    accent: "#00D9FF",
    title: "Log the show",
    description:
      "Search for the artist or set, rate it, write a review. Takes 30 seconds.",
  },
  {
    number: "2",
    icon: ClipboardList,
    accent: "#FF006E",
    title: "Build your profile",
    description:
      "Every show stacks up. Your profile becomes a full record of everything you've ever attended.",
  },
  {
    number: "3",
    icon: Search,
    accent: "#A855F7",
    title: "Discover what to see next",
    description:
      "Browse community ratings to find out who's worth seeing before you buy a ticket.",
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
            How it works
          </h2>
          <p className="text-gray-400 text-base">
            Simple. Like it should be.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px z-0"
            style={{ background: "linear-gradient(90deg, #00D9FF, #FF006E, #A855F7)", opacity: 0.4 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ background: `${step.accent}1F`, border: `1px solid ${step.accent}55`, boxShadow: `0 0 20px ${step.accent}22` }}
                >
                  {step.number}
                </div>
                <div className="mb-3">
                  <Icon className="w-6 h-6" style={{ color: step.accent }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
