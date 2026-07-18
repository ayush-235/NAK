import AvatarUpload from "./AvatarUpload";
type ProfileHeaderProps = {
  displayName: string;
  username: string;
  bio: string;
  photoURL?: string;
};

export default function ProfileHeader({
  displayName,
  username,
  bio,
  photoURL,
}: ProfileHeaderProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      {/* Cover */}
     <div className="h-64 bg-gradient-to-br from-violet-700 via-fuchsia-600 to-cyan-500 relative">
  <div className="absolute inset-0 bg-black/20"></div>
</div>

      <div className="relative px-8 pb-8">
        {/* Avatar */}
        <div className="-mt-20 flex items-end justify-between">
  <AvatarUpload photoURL={photoURL} />
  

  
</div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
  <h1 className="text-4xl font-bold text-white">
    {displayName}
  </h1>

  <span className="rounded-full bg-violet-600 px-2 py-1 text-xs font-semibold text-white">
    NAK
  </span>
</div>

         <p className="mt-1 text-lg text-zinc-400">
            @{username}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            {bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-zinc-400">
            <span>📍 India</span>
            <span>📅 Joined 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}