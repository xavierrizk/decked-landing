"use client";

import { motion } from "framer-motion";
import { Star, MapPin, MessageCircle, Heart, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Rate Everything",
    description:
      "Concerts, festivals, DJ sets, live bands, raves — if it's live, you can rate it.",
    accent: "#00D9FF",
  },
  {
    icon: MapPin,
    title: "Find What's Next",
    description:
      "Discover live music events happening in your city and beyond.",
    accent: "#FF006E",
  },
  {
    icon: MessageCircle,
    title: "Share Your Taste",
    description:
      "Review and discuss live music experiences with people who were there.",
    accent: "#00D9FF",
  },
  {
    icon: Heart,
    title: "Follow What You Love",
    description:
      "Keep up with your favorite artists and the events you don't want to miss.",
    accent: "#FF006E",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Real fans rating real experiences — honest ratings you can actually trust.",
    accent: "#00D9FF",
  },
  {
    icon: Globe,
    title: "For Everyone",
    description:
      "Whether you're into EDM, rock, hip-hop, concerts, or festivals — it's all here.",
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
          Everything You Need to Rate Live Music
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Built for everyone who loves a live show.
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
              className="bg-[#111114] border border-white/[0.07] rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 cursor-default"
              style={{ ['--accent' as string]: feature.accent }}
            >
              <div
                className="rounded-xl p-3 w-fit mb-4"
                style={{ background: `${feature.accent}18` }}
              >
                <Icon className="w-6 h-6" style={{ color: feature.accent }} />
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
