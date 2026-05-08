"use client"

import { useMemo, useState } from "react"
import questions from "../data/questions.json"

type Step = "intro" | "questions" | "results"

type Answer = {
  questionId: number
  value: number
}

function classifyAlignment(score: number) {
  if (score >= 90) return "guide"
  if (score >= 70) return "activated"
  if (score >= 40) return "aligned"
  return "exploring"
}

function stageSummary(classification: string) {
  switch (classification) {
    case "guide":
      return "You show strong alignment with unity-centered identity, protocol awareness, and guided service."
    case "activated":
      return "You show clear alignment with the OneGodian framework and are ready for deeper protocol engagement."
    case "aligned":
      return "You show meaningful alignment and may benefit from additional education, reflection, and mapper guidance."
    default:
      return "You are exploring the foundations of identity, unity, and intelligent-system alignment."
  }
}

export default function HomePage() {
  const [step, setStep] = useState<Step>("intro")
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const currentQuestion = questions[index]

  const score = useMemo(() => {
    if (!answers.length) return 0
    const raw = answers.reduce((sum, item) => sum + item.value, 0)
    return Math.round((raw / (questions.length * 5)) * 100)
  }, [answers])

  const classification = classifyAlignment(score)

  function answerQuestion(value: number) {
    const nextAnswers = [
      ...answers.filter((item) => item.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, value }
    ]

    setAnswers(nextAnswers)

    if (index + 1 >= questions.length) {
      setStep("results")
      return
    }

    setIndex(index + 1)
  }

  function resetMapper() {
    setStep("intro")
    setIndex(0)
    setAnswers([])
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
          OneGodian Protocol Platform
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          OneGodian Belief Mapper™
        </h1>

        <p className="text-slate-300 text-lg mb-10">
          Structured identity alignment and protocol interaction system.
        </p>

        {step === "intro" && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Begin Mapper Flow</h2>
            <p className="text-slate-400 mb-6">
              Answer seven questions to receive an alignment score, result classification, and declaration-ready summary.
            </p>
            <button
              onClick={() => setStep("questions")}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400"
            >
              Start Assessment
            </button>
          </section>
        )}

        {step === "questions" && currentQuestion && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                <span>Question {index + 1} of {questions.length}</span>
                <span>{Math.round(((index + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-cyan-400"
                  style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {currentQuestion.question}
            </h2>

            <div className="grid gap-3 md:grid-cols-5">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => answerQuestion(value)}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 hover:border-cyan-400 hover:bg-slate-700"
                >
                  {value}
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-xs text-slate-500">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
          </section>
        )}

        {step === "results" && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">
              Mapper Result
            </p>

            <h2 className="text-3xl font-bold mb-4">Alignment Classification</h2>

            <div className="text-7xl font-black text-cyan-400 mb-4">{score}</div>

            <div className="inline-flex rounded-full bg-cyan-500/20 border border-cyan-500/30 px-5 py-2 text-cyan-300 mb-6 capitalize">
              {classification}
            </div>

            <p className="text-slate-300 text-lg mb-8">
              {stageSummary(classification)}
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 mb-6">
              <h3 className="font-semibold mb-2">Declaration Preview</h3>
              <p className="text-slate-400 text-sm">
                This declaration confirms completion of the OneGodian Belief Mapper™ workflow and records the generated alignment classification for educational and protocol-reference purposes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400">
                Generate Declaration
              </button>
              <button
                onClick={resetMapper}
                className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 hover:border-cyan-400"
              >
                Restart Mapper
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
