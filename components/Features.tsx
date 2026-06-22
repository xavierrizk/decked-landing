"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, MessageCircle, Users, TrendingUp, Music } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Rate what you've seen",
    description:
      "Score every concert, DJ set, festival, or rave you attend. Break it down by performance, crowd, and venue.",
    accent: "#00D9FF",
  },
  {
    icon: BookOpen,
    title: "Keep a log",
    description:
      "Your profile becomes a full record of your live music history. Every show, searchable and organized.",
    accent: "#FF006E",
  },
  {
    icon: MessageCircle,
    title: "Leave a review",
    description:
      "Write about the night. Attach a video clip. Other fans who were there will know exactly what you mean.",
    accent: "#00D9FF",
  },
  {
    icon: Music,
    title: "Follow artists",
    description:
      "Follow the DJs and artists you care about. See their upcoming sets and how the community rated them.",
    accent: "#FF006E",
  },
  {
    icon: Users,
    title: "See what your friends rate",
    description:
      "Follow people with the same taste. Find out who else was at the same show.",
    accent: "#00D9FF",
  },
  {
    icon: TrendingUp,
    title: "Discover what's worth seeing",
    description:
      "Community ratings surface the best sets. No algorithms — just people who were actually there.",
    accent: "#FF006E",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-semibold tracking-normal text-white mb-4">
          Built for people who actually go to shows
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Not for streaming. For the nights you were actually there.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111114] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-all cursor-default"
            >
              <div className="rounded-xl p-3 w-fit mb-4 bg-white/[0.06]">
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
