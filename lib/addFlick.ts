import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Flick } from "@/types/flick";

export async function addFlick(
  text: string,
  userId: string,
  userEmail: string
) {
  const flick: Flick = {
    text,
    userId,
    userEmail,
    createdAt: serverTimestamp(),
    likes: 0,
    boosts: 0,
    replies: 0,
  };

  await addDoc(collection(db, "flicks"), flick);
}