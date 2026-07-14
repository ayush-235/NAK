"use client";

import { motion } from "framer-motion";

// Signature element: an animated constellation of nodes + connecting
// lines, standing in for the idea of a social graph — people (nodes)
// linked by relationships (edges), pulsing gently to feel alive.
const NODES = [
  { x: 40, y: 60 }, { x: 180, y: 30 }, { x: 320, y: 90 },
  { x: 90, y: 180 }, { x: 260, y: 200 }, { x: 380, y: 160 },
  { x: 150, y: 260 }, { x: 40, y: 320 }, { x: 340, y: 300 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
  [3, 4], [4, 5], [3, 6], [4, 8], [6, 7], [6, 8], [7, 3],
];

export function NetworkBackground({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={`edge-${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="url(#nak-edge-gradient)"
          strokeWidth={1}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.35, pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.3 + i * 0.06, ease: "easeOut" }}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 5 : 3.5}
          fill={i % 3 === 0 ? "#22D3EE" : "#7C5CFC"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        />
      ))}
      <defs>
        <linearGradient id="nak-edge-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C5CFC" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}