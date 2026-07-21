"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What can I rate?",
    a: "Anything live! Concerts, festivals, DJ sets, live bands, raves — if you experienced it in person, you can rate and review it on DECK'D.",
  },
  {
    q: "Is DECK'D only for EDM?",
    a: "Nope! Rock, pop, hip-hop, country, jazz — any live music. Whether you're at a stadium concert, an intimate gig, or a warehouse rave, it belongs here.",
  },
  {
    q: "How is it different from Spotify?",
    a: "Spotify is for streaming recorded music. DECK'D is for LIVE experiences and community reviews — rating the shows you actually went to and discovering what to see next through real fans.",
  },
  {
    q: "What is DECK'D?",
    a: "DECK'D is a community platform for rating and discovering live music. Think Letterboxd, but for concerts, festivals, DJ sets, and every kind of live performance. Create an account, rate the shows you go to, leave reviews, and follow people with similar taste.",
  },
  {
    q: "How do ratings work?",
    a: "Ratings are 1–5 stars. Each user can rate a performance once. The overall rating shown is the average of all user ratings, and you can write a text review alongside your score.",
  },
  {
    q: "Is DECK'D free?",
    a: "Yes, completely free. Create an account, rate live music, follow artists, and use all features at no cost. We may add premium features later, but the core experience will always be free.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-white font-semibold pr-4 group-hover:text-gray-300 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold tracking-normal text-white mb-4">
            Questions
          </h2>
          <p className="text-gray-400 text-base">
            What people usually ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
