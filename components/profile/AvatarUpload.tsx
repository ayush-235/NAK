"use client";

type AvatarUploadProps = {
  photoURL?: string;
};

export default function AvatarUpload({
  photoURL,
}: AvatarUploadProps) {
  return (
    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-900 shadow-2xl cursor-pointer group">
      {photoURL ? (
        <img
          src={photoURL}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900 text-5xl text-white">
          👤
        </div>
      )}

      <div className="absolute inset-0 hidden items-center justify-center bg-black/50 group-hover:flex">
        <span className="text-sm font-medium text-white">
          Change
        </span>
      </div>
    </div>
  );
}