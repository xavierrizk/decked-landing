"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Decked?",
    a: "Decked is a community platform for rating and discovering DJ sets. Think Letterboxd, but for DJ sets and raves. Create an account, find sets from your favourite artists, leave star ratings and reviews, and follow other ravers to discover music through people with similar taste.",
  },
  {
    q: "How do I become a verified DJ?",
    a: "Submit a DJ profile request from your account. Our team reviews your request and checks your SoundCloud, Instagram, or other social presence. Verified DJs get a blue checkmark on their profile, increasing trust with fans.",
  },
  {
    q: "Can I download sets from Decked?",
    a: "No, Decked is a rating and discovery platform, not a hosting service. We link to sets on SoundCloud, Mixcloud, and other platforms — we don't host or allow direct downloads.",
  },
  {
    q: "Is Decked free?",
    a: "Yes, completely free. Create an account, rate sets, follow DJs, and use all features at no cost. We may introduce premium features in the future but the core experience will always be free.",
  },
  {
    q: "How do ratings work?",
    a: "Ratings are 1–5 stars. Each user can rate a set once. The overall rating shown on a set page is the average of all user ratings. You can also write a text review alongside your rating.",
  },
  {
    q: "Who can submit a DJ profile?",
    a: "Any user can request a DJ profile. Submit your DJ name, bio, and social links. Our admin team reviews requests within a few days.",
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
        <span className="text-white font-semibold pr-4 group-hover:text-purple-300 transition-colors">
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
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Decked.
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
