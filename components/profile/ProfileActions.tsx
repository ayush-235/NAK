type ProfileActionsProps = {
  isOwnProfile?: boolean;
  onEdit?: () => void;
};

export default function ProfileActions({
  isOwnProfile = true,
  onEdit,
}: ProfileActionsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {isOwnProfile ? (
        <>
         <button
  onClick={onEdit}
  className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700"
>
  Edit Profile
</button>
          <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-500">
            Share Profile
          </button>
        </>
      ) : (
        <>
          <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-700">
            Follow
          </button>

          <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-500">
            Message
          </button>
        </>
      )}
    </div>
  );
}