import { formatDistanceToNow } from "date-fns";

export function formatTime(timestamp: any) {
  if (!timestamp?.toDate) return "Just now";

  return formatDistanceToNow(timestamp.toDate(), {
    addSuffix: true,
  });
}