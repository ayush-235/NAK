"use client";
import { getFlicks } from "@/lib/getFlicks";
import { Flick } from "@/types/flick";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { addFlick } from "@/lib/addFlick"; 
export default function Feed() {
    const [text, setText] = useState("");
const [loading, setLoading] = useState(false);
const [flicks, setFlicks] = useState<Flick[]>([]);
const loadFlicks = async () => {
  const data = await getFlicks();
  setFlicks(data as Flick[]);
};

useEffect(() => {
  loadFlicks();
}, []);

const handlePublish = async () => {
  if (!text.trim()) return;

  const user = auth.currentUser;

  if (!user) {
    alert("Please login first.");
    return;
  }

  try {
    setLoading(true);

    await addFlick(
      text,
      user.uid,
      user.email || "Unknown User"
    );

    setText("");
    await loadFlicks();
    alert("Flick published successfully! ⚡");
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="mx-auto max-w-2xl space-y-6">

      {/* Welcome Card */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <h1 className="text-3xl font-bold text-white">
          Beyond Social Media.
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome to NAK.
        </p>

      </div>

      {/* Publish Flick */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <h2 className="text-xl font-semibold text-white">
          Publish your first Flick ⚡
        </h2>

       <textarea
         value={text}
         onChange={(e) => setText(e.target.value)}
         maxLength={300}
          placeholder="What's happening today?"
          className="mt-5 h-36 w-full resize-none rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none focus:border-violet-500"
          />

        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm text-zinc-500">
         {text.length} / 300
          </span>

          <button
           onClick={handlePublish}
          disabled={loading}
         className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
         >
         {loading ? "Publishing..." : "Publish Flick ⚡"}
         </button>

        </div>

      </div>
{flicks.map((flick) => (
  <div
    key={flick.id}
    className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 font-bold text-white">
        {flick.userEmail.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {flick.userEmail.split("@")[0]}
        </h3>

        <p className="text-sm text-zinc-500">
          Just now
        </p>
      </div>
    </div>

    <p className="mt-5 text-zinc-200">
      {flick.text}
    </p>

    <div className="mt-6 flex gap-8 text-zinc-400">
      <button>❤️ {flick.likes}</button>
      <button>💬 {flick.replies}</button>
      <button>⚡ Boost</button>
    </div>
  </div>
))}
    </div>
  );
}