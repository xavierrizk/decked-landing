"use client";

import { motion } from "framer-motion";
import { Star, Users, Compass, MessageCircle, BadgeCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Rate Sets",
    description:
      "Give 1–5 stars to DJ sets. Your ratings help surface the best nights to the community.",
  },
  {
    icon: Users,
    title: "Follow DJs",
    description:
      "Keep up with your favourite artists and never miss a set worth rating.",
  },
  {
    icon: Compass,
    title: "Discover Music",
    description:
      "Explore trending sets, top-rated DJs, and hidden gems from the global underground.",
  },
  {
    icon: MessageCircle,
    title: "Community Reviews",
    description:
      "Leave detailed reviews, read opinions from other ravers, spark conversations.",
  },
  {
    icon: BadgeCheck,
    title: "Verified DJs",
    description:
      "Blue-tick verified artists you can trust. Applied for and reviewed by our team.",
  },
  {
    icon: Zap,
    title: "Live Activity Feed",
    description:
      "See what your friends are rating in real time. Discover sets through people you trust.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          Everything You Need to Rate the Night
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Built from the ground up for the rave community.
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
              className="bg-[#111114] border border-white/[0.07] rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:-translate-y-1 cursor-default"
            >
              <div className="bg-purple-500/10 rounded-xl p-3 w-fit mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
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
