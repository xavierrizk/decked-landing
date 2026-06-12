'use client';
import React from 'react';

export default function Turntable() {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex-shrink-0 select-none">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)', filter: 'blur(20px)', animation: 'glowPulse 3s ease-in-out infinite' }} />

      {/* Platter (the rotating disc base) */}
      <div className="absolute inset-4 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #1a1a1a, #2a2a2a, #1a1a1a, #222, #1a1a1a)',
          boxShadow: '0 0 0 2px #333, 0 0 40px rgba(124,58,237,0.3), inset 0 0 20px rgba(0,0,0,0.8)',
          animation: 'spin 1.8s linear infinite',
        }}>

        {/* Vinyl record surface */}
        <div className="absolute inset-3 rounded-full overflow-hidden"
          style={{ background: '#0d0d0d' }}>

          {/* Grooves — concentric rings */}
          {[14, 22, 30, 38, 46, 54, 62, 70, 78, 86].map((r, i) => (
            <div key={i} className="absolute rounded-full border"
              style={{
                borderColor: 'rgba(255,255,255,0.04)',
                inset: `${r * 0.95}%`,
              }} />
          ))}

          {/* Label in center */}
          <div className="absolute inset-[30%] rounded-full flex items-center justify-center"
            style={{
              background: 'conic-gradient(from 0deg, #7c3aed, #5b21b6, #4c1d95, #6d28d9, #7c3aed)',
              boxShadow: '0 0 12px rgba(124,58,237,0.6)',
            }}>
            {/* Spindle hole */}
            <div className="w-3 h-3 rounded-full bg-black" style={{ boxShadow: 'inset 0 0 4px rgba(255,255,255,0.1)' }} />
          </div>

          {/* Light reflection sweep */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.03) 30deg, transparent 60deg)',
            }} />
        </div>
      </div>

      {/* Tonearm pivot base */}
      <div className="absolute top-4 right-6 w-5 h-5 rounded-full z-10"
        style={{ background: '#2a2a2a', border: '2px solid #444', boxShadow: '0 0 8px rgba(0,0,0,0.5)' }} />

      {/* Tonearm */}
      <div className="absolute z-10"
        style={{
          top: '18px',
          right: '22px',
          width: '140px',
          height: '4px',
          transformOrigin: '8px 2px',
          transform: 'rotate(28deg)',
          animation: 'tonearmSway 6s ease-in-out infinite',
        }}>
        {/* Arm body */}
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'linear-gradient(90deg, #555, #888, #555)', boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }} />
        {/* Headshell bend */}
        <div className="absolute right-0 top-0 w-10 h-4"
          style={{
            transformOrigin: 'left center',
            transform: 'rotate(-18deg) translateY(-4px)',
            background: 'linear-gradient(90deg, #666, #999)',
            borderRadius: '2px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
          }}>
          {/* Stylus */}
          <div className="absolute bottom-0 right-1 w-1 h-3 rounded-b-sm"
            style={{ background: '#aaa', transform: 'rotate(10deg)' }} />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes tonearmSway {
          0%, 100% { transform: rotate(28deg); }
          50%       { transform: rotate(26deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
