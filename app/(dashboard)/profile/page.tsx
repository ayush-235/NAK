"use client";

import EditProfileModal from "@/components/profile/EditProfileModal";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Profile } from "../../../types/profile";

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      await user.reload();

      if (!user.emailVerified) {
        router.push("/verify-email");
        return;
      }

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data() as Profile);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <div className="p-8">Loading...</div>;

 return (
  <div className="space-y-6">
    <ProfileHeader
      displayName={profile?.displayName || ""}
      username={profile?.username || ""}
      bio={profile?.bio || ""}
    />

    <ProfileStats
      followers={0}
      following={0}
      flicks={0}
      pulse={0}
    />

   <ProfileActions
  isOwnProfile
  onEdit={() => setIsEditOpen(true)}
/>

    <ProfileTabs />
    <EditProfileModal
  open={isEditOpen}
  onClose={() => setIsEditOpen(false)}
  profile={profile}
/>
  </div>
);
}