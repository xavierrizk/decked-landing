"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, MessageCircle, Users, TrendingUp, Music } from "lucide-react";

const features = [
  {
    icon: Star,
    image: "/app-set-detail.png",
    imgPos: "object-top",
    title: "Rate what you've seen",
    description:
      "Score every concert, DJ set, festival, or rave you attend. Break it down by performance, crowd, and venue.",
    accent: "#00D9FF",
  },
  {
    icon: BookOpen,
    image: "/app-profile.png",
    imgPos: "object-top",
    title: "Keep a log",
    description:
      "Your profile becomes a full record of your live music history. Every show, searchable and organized.",
    accent: "#FF006E",
  },
  {
    icon: MessageCircle,
    image: "/app-review.png",
    imgPos: "object-top",
    title: "Leave a review",
    description:
      "Write about the night. Attach a video clip. Other fans who were there will know exactly what you mean.",
    accent: "#00D9FF",
  },
  {
    icon: Music,
    image: "/app-artists.png",
    imgPos: "object-top",
    title: "Follow artists",
    description:
      "Follow the DJs and artists you care about. See their upcoming sets and how the community rated them.",
    accent: "#FF006E",
  },
  {
    icon: Users,
    image: "/app-community.png",
    imgPos: "object-top",
    title: "See what your friends rate",
    description:
      "Follow people with the same taste. Find out who else was at the same show.",
    accent: "#00D9FF",
  },
  {
    icon: TrendingUp,
    image: "/app-trending.png",
    imgPos: "object-top",
    title: "Discover what's worth seeing",
    description:
      "Community ratings surface the best sets. No algorithms — just people who were actually there.",
    accent: "#FF006E",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
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
              className="group bg-[#111114] border border-white/[0.07] rounded-2xl overflow-hidden transition-all cursor-default hover:-translate-y-0.5"
              style={{ ["--accent" as string]: feature.accent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${feature.accent}55`;
                e.currentTarget.style.boxShadow = `0 0 30px ${feature.accent}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Product screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-black">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full h-full object-cover ${feature.imgPos} transition-transform duration-500 group-hover:scale-[1.03]`}
                />
                {/* fade into card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111114] to-transparent" />
                {/* accent wash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${feature.accent}14, transparent 60%)` }}
                />
              </div>

              <div className="p-6">
                <div
                  className="rounded-xl p-3 w-fit mb-4"
                  style={{ background: `${feature.accent}1A`, border: `1px solid ${feature.accent}33` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.accent }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
