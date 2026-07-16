export default function Rightbar() {
  return (
    <aside className="w-80 border-l border-zinc-800 bg-zinc-950 p-6 space-y-6">

      {/* AI Connect */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
        <h2 className="text-xl font-bold text-white">
          🤖 AI Connect
        </h2>

        <p className="mt-3 text-sm text-zinc-400">
          Discover people with similar interests using AI.
        </p>

        <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 py-3 font-semibold text-white">
          Explore AI
        </button>
      </div>

      {/* Trending Flicks */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">

        <h2 className="text-xl font-bold text-white">
          🔥 Trending Flicks
        </h2>

        <div className="mt-5 space-y-4">

          <p className="text-zinc-300">
            🚀 Building startups
          </p>

          <p className="text-zinc-300">
            🎬 AI Animation
          </p>

          <p className="text-zinc-300">
            💻 Web Development
          </p>

        </div>

      </div>

      {/* Active Circles */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">

        <h2 className="text-xl font-bold text-white">
          👥 Active Circles
        </h2>

        <div className="mt-5 space-y-4">

          <p className="text-zinc-300">
            🚀 Startup Builders
          </p>

          <p className="text-zinc-300">
            🎨 Designers Hub
          </p>

          <p className="text-zinc-300">
            🎮 Gamers
          </p>

        </div>

      </div>

    </aside>
  );
}