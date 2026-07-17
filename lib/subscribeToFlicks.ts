import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { Flick } from "@/types/flick";

export function subscribeToFlicks(
  callback: (flicks: Flick[]) => void
) {
  const q = query(
    collection(db, "flicks"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const flicks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Flick[];

    callback(flicks);
  });
}