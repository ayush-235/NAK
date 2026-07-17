"use client";

import { auth } from "@/firebase/config";
import {
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  const handleVerified = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    await user.reload();

    if (user.emailVerified) {
      router.push("/dashboard");
    } else {
      alert("Your email is not verified yet.");
    }
  };

  const handleResend = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      await sendEmailVerification(user);

      alert("Verification email sent successfully!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white">
          Verify Your Email 📧
        </h1>

        <p className="mt-4 text-center text-zinc-400">
          We've sent a verification email to:
        </p>

        <p className="mt-2 text-center font-medium text-violet-400">
          {user?.email}
        </p>

        <p className="mt-6 text-center text-zinc-500 text-sm">
          Please verify your email before accessing NAK.
        </p>

        <div className="mt-8 space-y-4">

          <Button
            className="w-full"
            onClick={() =>
              window.open("https://mail.google.com", "_blank")
            }
          >
            Open Gmail
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleResend}
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Verification Email"}
          </Button>

          <Button
            className="w-full"
            onClick={handleVerified}
          >
            I've Verified
          </Button>

          <Button
            variant="ghost"
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>

        </div>
      </div>
    </div>
  );
}