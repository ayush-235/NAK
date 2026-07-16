"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful 🎉");
    router.push("/dashboard");
  } catch (error: any) {
    alert(error.message);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          Login to continue using NAK
        </p>

        <div className="mt-8 space-y-5">
          <Input
          type="email"
         placeholder="Email Address"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />

          <Input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <Button
           className="w-full py-6 rounded-xl"
         onClick={handleLogin}
          >
         Login
         </Button>
         </div>

        <p className="mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-violet-400 hover:text-violet-300"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}