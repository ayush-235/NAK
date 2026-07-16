export default function Feed() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">

      {/* Welcome Card */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <h1 className="text-3xl font-bold text-white">
          Beyond Social Media.
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome to NAK.
        </p>

      </div>

      {/* Publish Flick */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <h2 className="text-xl font-semibold text-white">
          Publish your first Flick ⚡
        </h2>

        <textarea
          placeholder="What's happening today?"
          className="mt-5 h-36 w-full resize-none rounded-2xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none focus:border-violet-500"
        />

        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm text-zinc-500">
            0 / 300
          </span>

          <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 font-semibold text-white transition hover:scale-105">
            Publish Flick ⚡
          </button>

        </div>

      </div>

      {/* Example Flick */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 font-bold text-white">
            A
          </div>

          <div>

            <h3 className="font-semibold text-white">
              Ayush
            </h3>

            <p className="text-sm text-zinc-500">
              2 minutes ago
            </p>

          </div>

        </div>

        <p className="mt-5 text-zinc-200">
          🚀 Finally started building NAK.
          Beyond Social Media. Welcome to NAK.
        </p>

        <div className="mt-6 flex gap-8 text-zinc-400">

          <button>❤️ 24</button>

          <button>💬 8</button>

          <button>🚀 Boost</button>

        </div>

      </div>

    </div>
  );
}