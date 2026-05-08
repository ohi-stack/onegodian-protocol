export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          OneGodian Belief Mapper™
        </h1>

        <p className="text-slate-300 text-lg mb-10">
          Structured identity alignment and protocol interaction system.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Begin Mapper Flow
          </h2>

          <p className="text-slate-400 mb-6">
            Answer seven questions to receive an alignment classification.
          </p>

          <button className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold">
            Start Assessment
          </button>
        </div>
      </div>
    </main>
  )
}
