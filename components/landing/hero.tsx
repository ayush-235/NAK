"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/landing/dashboard-mockup";
import { NetworkBackground } from "@/components/landing/network-background";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 lg:px-8 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            The Future of{" "}
            <span className="text-gradient">Social Connection.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg text-muted"
          >
            Share moments. Build communities. Discover people. Experience NAK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <NetworkBackground className="pointer-events-none absolute -z-10 h-[420px] w-[460px] opacity-70" />
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}