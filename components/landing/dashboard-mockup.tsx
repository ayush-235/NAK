"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Bell, TrendingUp } from "lucide-react";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-md rounded-2xl border border-border bg-surface/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      {/* window chrome */}
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>

      {/* feed post */}
      <div className="rounded-xl border border-border bg-background/60 p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#22D3EE]" />
          <div>
            <p className="text-sm font-medium">Maya Chen</p>
            <p className="text-xs text-muted">2m ago · Community: Design</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted">
          Just shipped our new prototype 🎉 Loving how the community
          jumped in with feedback within minutes.
        </p>
        <div className="mt-3 h-28 w-full rounded-lg bg-gradient-to-br from-[#7C5CFC]/20 to-[#22D3EE]/20" />
        <div className="mt-3 flex items-center gap-5 text-muted">
          <span className="flex items-center gap-1.5 text-xs">
            <Heart className="h-4 w-4" /> 248
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <MessageCircle className="h-4 w-4" /> 36
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Repeat2 className="h-4 w-4" /> 12
          </span>
        </div>
      </div>

      {/* floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        className="absolute -right-6 top-6 flex items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-xl"
      >
        <Bell className="h-4 w-4 text-[#22D3EE]" />
        <p className="text-xs">
          <span className="font-medium">+128</span> new followers
        </p>
      </motion.div>

      {/* floating trend card */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-xl"
      >
        <TrendingUp className="h-4 w-4 text-[#7C5CFC]" />
        <p className="text-xs">Trending in Communities</p>
      </motion.div>
    </motion.div>
  );
}