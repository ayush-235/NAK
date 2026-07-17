"use client";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!displayName || !username || !email || !password) {
  alert("Please fill all fields.");
  return;
}
    try {
      const userCredential = await createUserWithEmailAndPassword(
  auth,
  email,
  password
);

const user = userCredential.user;
await sendEmailVerification(user);

await setDoc(doc(db, "users", user.uid), {
  displayName,
  username: username.toLowerCase(),
  email,
  bio: "",
  photoURL: "",
  createdAt: serverTimestamp(),
});

     alert(
  "Account created successfully! 🎉\n\nPlease check your email and verify your account before logging in."
);
     router.push("/verify-email");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          Join NAK today
        </p>

        <div className="mt-8 space-y-5">
          <Input
          type="text"
          placeholder="Full Name"
          value={displayName}
         onChange={(e) => setDisplayName(e.target.value)}
          />

          <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
           />
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
            onClick={handleSignup}
          >
            Create Account
          </Button>
        </div>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-violet-400 hover:text-violet-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}