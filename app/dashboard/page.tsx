"use client";

import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">

        <h1 className="text-4xl font-bold text-white">
          Welcome to Dashboard 🚀
        </h1>

        <p className="mt-6 text-zinc-400">
          Logged in as
        </p>

        <p className="text-violet-400 font-semibold text-xl mt-2">
          {userEmail}
        </p>

        <Button
          onClick={handleLogout}
          className="mt-10 w-full py-6 rounded-xl"
        >
          Logout
        </Button>

      </div>

    </div>
  );
}