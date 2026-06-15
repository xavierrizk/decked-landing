"use client";

import { useEffect, useState } from "react";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://decked-backend.onrender.com";

export interface Stats {
  totalUsers: number;
  totalSets: number;
  totalConcerts: number;
  totalReviews: number;
  totalDJs: number;
  totalEvents: number;
}

// Fetches real, live stats from the backend. Returns null until loaded,
// and stays null on error (so we never render fake numbers).
export function useStats(): Stats | null {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`${BACKEND_URL}/api/stats`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (active) setStats(data);
      })
      .catch(() => {
        if (active) setStats(null);
      });
    return () => {
      active = false;
    };
  }, []);

  return stats;
}

// "21" -> "21+",  "1240" -> "1.2k+"
export function fmtStat(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k+`;
  return `${n}+`;
}
