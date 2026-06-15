"use client";

import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

const APP_URL = "https://decked-frontend.onrender.com";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.05] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-400">✦</span>
              <span className="text-white font-black text-xl tracking-widest uppercase">
                Decked
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Rate the live music that moves you.
            </p>
            <p className="text-gray-700 text-xs">
              © {new Date().getFullYear()} Decked. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How it Works", href: "#how-it-works" },
                { label: "Discover", href: APP_URL },
                { label: "Sign Up", href: APP_URL },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Socials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Globe className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Share2 className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-white transition-colors text-sm font-bold"
                aria-label="Discord"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
