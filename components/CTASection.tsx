"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const APP_URL = "https://decked-frontend.onrender.com";

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      {/* Cyan glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[250px] bg-[#00D9FF]/10 blur-[100px] rounded-full animate-glow" />
      </div>
      {/* Pink glow offset */}
      <div className="absolute inset-0 flex items-center justify-center translate-x-32 pointer-events-none">
        <div className="w-[300px] h-[200px] bg-[#FF006E]/10 blur-[100px] rounded-full animate-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Ready to Rate Live Music?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join thousands of music lovers already rating live experiences on
            DECK'D. Free forever.
          </p>

          <Link
            href={APP_URL}
            className="inline-flex items-center gap-2 bg-[#FF006E] hover:bg-[#e0005f] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-xl shadow-[#FF006E]/20 mb-6"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
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
