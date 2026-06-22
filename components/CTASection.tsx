"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const APP_URL = "https://decked-frontend.onrender.com";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Subtle vignette only */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-normal text-white mb-5">
            Start logging your shows.
          </h2>
          <p className="text-gray-400 text-base mb-10">
            Free. No catches.
          </p>

          <Link
            href={APP_URL}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:bg-white/90 mb-6"
          >
            Create an account
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link href={APP_URL} className="text-gray-400 hover:text-[#00D9FF] transition-colors underline underline-offset-2">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
