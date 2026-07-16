"use client";

import { Bell, Search, Moon } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">

      {/* Logo */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
        NAK
      </h1>

      {/* Search */}
      <div className="w-[420px]">
        <input
          type="text"
          placeholder="Search people, Flicks, Circles..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="rounded-full bg-zinc-900 p-2 hover:bg-zinc-800 transition">
          <Moon size={20} />
        </button>

        <button className="rounded-full bg-zinc-900 p-2 hover:bg-zinc-800 transition">
          <Bell size={20} />
        </button>

        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  );
}