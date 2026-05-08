type Props = {
  score: number
  classification: string
}

export function ResultCard({ score, classification }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold mb-4">Alignment Result</h2>

      <div className="text-5xl font-bold text-cyan-400 mb-4">
        {score}
      </div>

      <div className="inline-flex rounded-full bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 text-cyan-300">
        {classification}
      </div>
    </div>
  )
}
