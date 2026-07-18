"use client";

import { useState } from "react";

const tabs = ["Flicks", "Pulse", "Saved"];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Flicks");

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      {/* Tabs */}
      <div className="flex border-b border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-violet-500 text-violet-400"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-8 text-center text-zinc-400">
        {activeTab === "Flicks" && (
          <p>No Flicks yet 🚀</p>
        )}

        {activeTab === "Pulse" && (
          <p>No Pulse uploaded 🎥</p>
        )}

        {activeTab === "Saved" && (
          <p>No saved content ❤️</p>
        )}
      </div>
    </div>
  );
}