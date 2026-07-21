"use client";

import { useEffect, useRef } from "react";

/**
 * Animated rave background: dancing silhouettes, shifting club lights,
 * subtle strobe, and sound-wave rings. Sits behind the hero content.
 *
 * Perf/UX notes:
 * - Pauses when the tab is hidden and when scrolled out of view.
 * - Respects prefers-reduced-motion (renders a single static frame).
 * - Caps devicePixelRatio at 2 and throttles to ~40fps to stay light.
 */
export default function RaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDancers();
    };

    type Dancer = {
      x: number;
      y: number;
      size: number;
      offset: number;
      speed: number;
    };
    let dancers: Dancer[] = [];

    const buildDancers = () => {
      const count = Math.round(Math.min(22, Math.max(10, width / 70)));
      dancers = [];
      for (let i = 0; i < count; i++) {
        // Spread across width; cluster toward the lower third (a crowd)
        const x = (width / count) * i + Math.random() * (width / count);
        const y = height * 0.62 + Math.random() * height * 0.34;
        const size = 46 + Math.random() * 34;
        dancers.push({
          x,
          y,
          size,
          offset: Math.random() * Math.PI * 2,
          speed: 0.9 + Math.random() * 0.8,
        });
      }
      // Nearer (bigger) dancers draw last / on top
      dancers.sort((a, b) => a.size - b.size);
    };

    const drawDancer = (d: Dancer, t: number) => {
      const bob = Math.sin(t * d.speed + d.offset) * 8;
      const sway = Math.sin(t * d.speed * 0.7 + d.offset) * 14;
      const cx = d.x + sway;
      const baseY = d.y + bob;
      const s = d.size;

      ctx.fillStyle = "rgba(0,0,0,0.72)";

      // Head
      ctx.beginPath();
      ctx.arc(cx, baseY - s, s * 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Torso
      ctx.fillRect(cx - s * 0.1, baseY - s * 0.85, s * 0.2, s * 0.5);

      // Arms (raised, waving to the beat)
      const armAngle = Math.sin(t * d.speed * 1.2 + d.offset) * 0.6 - 0.3;
      for (const dir of [1, -1]) {
        ctx.save();
        ctx.translate(cx, baseY - s * 0.7);
        ctx.rotate(dir * armAngle);
        ctx.fillRect(-s * 0.045, -s * 0.34, s * 0.09, s * 0.4);
        ctx.restore();
      }

      // Legs
      ctx.fillRect(cx - s * 0.09, baseY - s * 0.35, s * 0.075, s * 0.36);
      ctx.fillRect(cx + s * 0.02, baseY - s * 0.35, s * 0.075, s * 0.36);
    };

    // Rave light palette
    const lights = [
      "rgba(0,217,255,0.30)", // cyan (brand)
      "rgba(255,0,110,0.28)", // pink (brand)
      "rgba(168,85,247,0.26)", // purple
      "rgba(255,120,0,0.20)", // orange
    ];

    const renderFrame = (t: number) => {
      // Base
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Moving spotlights
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 4; i++) {
        const lx = Math.sin(t * 0.35 + i * 1.7) * width * 0.32 + width * 0.5;
        const ly = Math.cos(t * 0.27 + i * 1.3) * height * 0.22 + height * 0.32;
        const r = Math.min(width, height) * 0.55;
        const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, r);
        g.addColorStop(0, lights[i % lights.length]);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      // Sound-wave rings from the "stage" (upper center)
      ctx.strokeStyle = "rgba(0,217,255,0.10)";
      ctx.lineWidth = 2;
      const originX = width * 0.5;
      const originY = height * 0.34;
      for (let i = 0; i < 5; i++) {
        const radius = 90 + i * 55 + ((t * 40) % 110);
        ctx.beginPath();
        ctx.arc(originX, originY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";

      // Dancers (crowd silhouettes)
      for (const d of dancers) drawDancer(d, t);

      // Subtle strobe wash
      const strobe = Math.max(0, Math.sin(t * 3.0)) ** 6 * 0.06;
      if (strobe > 0.002) {
        ctx.fillStyle = `rgba(255,255,255,${strobe})`;
        ctx.fillRect(0, 0, width, height);
      }

      // Vignette so hero text stays readable
      const vg = ctx.createLinearGradient(0, 0, 0, height);
      vg.addColorStop(0, "rgba(10,10,10,0.55)");
      vg.addColorStop(0.45, "rgba(10,10,10,0.15)");
      vg.addColorStop(1, "rgba(10,10,10,0.85)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);
    };

    resize();

    if (reduceMotion) {
      renderFrame(1.2);
      window.addEventListener("resize", () => {
        resize();
        renderFrame(1.2);
      });
      return;
    }

    // Animation loop, throttled + pausable
    let raf = 0;
    let last = 0;
    let start = performance.now();
    let visible = true;
    const frameInterval = 1000 / 40;

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (now - last < frameInterval) return;
      last = now;
      renderFrame((now - start) / 1000);
    };
    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) start = performance.now() - 0; // keep time flowing
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Pause when hero scrolled off screen
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting && !document.hidden;
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
