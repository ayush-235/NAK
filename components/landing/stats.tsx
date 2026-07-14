"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/landing/animated-counter";

const STATS = [
  { value: 10000, suffix: "+", display: null, label: "Users" },
  { value: 100000, suffix: "+", display: null, label: "Posts" },
  { value: 50, suffix: "+", display: null, label: "Communities" },
  { value: 0, suffix: "", display: "99.9%", label: "Uptime" },
];

export function Stats() {
  return (
    <section className="border-y border-border px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
              {stat.display ?? (
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              )}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}