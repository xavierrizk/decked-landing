"use client";

import { motion } from "framer-motion";
import { useStats, fmtStat } from "@/lib/useStats";

const testimonials = [
  {
    quote:
      "Finally a place to rate every show I go to — concerts, festivals, club nights, all of it.",
    handle: "@rave_marta",
    location: "Berlin",
    initials: "RM",
    accent: "#00D9FF",
  },
  {
    quote:
      "I rated my favorite festival sets and found so many new artists through the community.",
    handle: "@livemusic_sam",
    location: "Manchester",
    initials: "LS",
    accent: "#FF006E",
  },
  {
    quote:
      "The rating system is clean and the community is real — whatever live music you're into.",
    handle: "@tekno_jules",
    location: "Paris",
    initials: "TJ",
    accent: "#00D9FF",
  },
];

export default function SocialProof() {
  const stats = useStats();

  const boxes = stats
    ? [
        { number: fmtStat(stats.totalUsers),   label: "Music Lovers" },
        { number: fmtStat(stats.totalEvents),  label: "Live Events" },
        { number: fmtStat(stats.totalReviews), label: "Reviews Written" },
        { number: fmtStat(stats.totalDJs),     label: "Verified Artists" },
      ]
    : [];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Stats */}
      {boxes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {boxes.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-[#111114] border border-white/[0.07] rounded-2xl p-8"
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #FF006E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-semibold tracking-normal text-white mb-4">
          From the community
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-[#111114] border border-white/[0.07] rounded-2xl p-6"
          >
            <div className="text-5xl font-bold leading-none mb-4" style={{ color: `${t.accent}66` }}>
              &ldquo;
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: `${t.accent}1F`, border: `1px solid ${t.accent}55` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t.handle}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
