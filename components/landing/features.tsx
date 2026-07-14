"use client";

import {
  Sparkles,
  ShieldCheck,
  Brain,
  Users,
  BookOpen,
  BellRing,
} from "lucide-react";
import { FeatureCard } from "@/components/landing/feature-card";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Smart Feed",
    description: "A feed that learns what matters to you and surfaces it first.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Messaging",
    description: "End-to-end encrypted conversations, private by default.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Discover people and communities matched to your interests.",
  },
  {
    icon: Users,
    title: "Communities",
    description: "Spaces built around what you care about, not just who you know.",
  },
  {
    icon: BookOpen,
    title: "Stories",
    description: "Share fleeting moments that disappear after 24 hours.",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description: "Instant updates the moment something worth knowing happens.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-muted">
            Built for how people actually share, talk, and gather online.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} index={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}