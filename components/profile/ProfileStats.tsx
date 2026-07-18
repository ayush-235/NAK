type ProfileStatsProps = {
  followers?: number;
  following?: number;
  flicks?: number;
  pulse?: number;
};

export default function ProfileStats({
  followers = 0,
  following = 0,
  flicks = 0,
  pulse = 0,
}: ProfileStatsProps) {
  const stats = [
    { label: "Followers", value: followers },
    { label: "Following", value: following },
    { label: "Flicks", value: flicks },
    { label: "Pulse", value: pulse },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center transition-all duration-300 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10"
        >
          <h2 className="text-3xl font-bold text-white">
            {item.value}
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}