"use client";
import { auth, db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

type EditProfileModalProps = {
  open: boolean;
  onClose: () => void;
  profile: any;
};
export default function EditProfileModal({
  open,
  onClose,
  profile,
}: EditProfileModalProps) {
    const [displayName, setDisplayName] = useState("");
const [bio, setBio] = useState("");
const [location, setLocation] = useState("");
const [website, setWebsite] = useState("");

useEffect(() => {
  if (profile) {
    setDisplayName(profile.displayName || "");
    setBio(profile.bio || "");
    setLocation(profile.location || "");
    setWebsite(profile.website || "");
  }
}, [profile]);
const handleSave = async () => {
  try {
    const user = auth.currentUser;

    if (!user) return;

    await updateDoc(doc(db, "users", user.uid), {
      displayName,
      bio,
      location,
      website,
    });

    alert("Profile updated successfully! 🎉");

    onClose();

    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="mt-8 space-y-5">
          <input
  value={displayName}
  onChange={(e) => setDisplayName(e.target.value)}
  placeholder="Display Name"
  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-violet-500"
/>

          <textarea
  value={bio}
  onChange={(e) => setBio(e.target.value)}
            placeholder="Bio"
            rows={4}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-violet-500"
          />

          <input
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  placeholder="Location"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-violet-500"
          />

          <input
  value={website}
  onChange={(e) => setWebsite(e.target.value)}
  placeholder="Website"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-5 py-2 text-white"
          >
            Cancel
          </button>
<button
  onClick={handleSave}
  className="rounded-xl bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
>
  Save Changes
</button>
        </div>
      </div>
    </div>
  );
}