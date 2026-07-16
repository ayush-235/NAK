"use client";

import Link from "next/link";
import {
  House,
  Zap,
  MessageCircle,
  Users,
  Bell,
  Bot,
  User,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Home", icon: House, href: "/dashboard" },
  { name: "Flick", icon: Zap, href: "/flick" },
  { name: "Messages", icon: MessageCircle, href: "/messages" },
  { name: "Circles", icon: Users, href: "/circles" },
  { name: "AI Connect", icon: Bot, href: "/ai" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Profile", icon: User, href: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-zinc-800 bg-zinc-950 p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-white mb-10">
        NAK
      </h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button className="mt-auto flex items-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-red-400 hover:bg-red-500/20 transition">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}