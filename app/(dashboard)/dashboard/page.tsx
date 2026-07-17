"use client";

import Feed from "@/components/dashboard/Feed";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
  user.reload().then(() => {
    if (user.emailVerified) {
      setUserEmail(user.email || "");
    } else {
      router.push("/verify-email");
    }
  });
} else {
  router.push("/login");
}
    });

    return () => unsubscribe();
  }, [router]);


  return <Feed />;
}