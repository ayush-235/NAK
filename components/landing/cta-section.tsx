"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C5CFC]/15 via-transparent to-[#22D3EE]/15" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Join NAK?
          </h2>
          <p className="mt-4 text-muted">
            Create your account in seconds and start connecting.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg">
              Create Free Account
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}