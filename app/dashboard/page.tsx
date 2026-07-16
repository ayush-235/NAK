"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import Feed from "@/components/dashboard/Feed";
import Rightbar from "@/components/dashboard/Rightbar";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email || "");
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
  <div className="flex h-screen bg-background">

    {/* Sidebar */}
    <Sidebar />

    {/* Main Area */}
    <div className="flex-1 flex flex-col">

      <Topbar />

      <div className="flex flex-1 overflow-hidden">

        {/* Feed */}
        <main className="flex-1 overflow-y-auto p-6">
          <Feed />
        </main>

        {/* Rightbar */}
        <Rightbar />

      </div>

    </div>

  </div>
);
}