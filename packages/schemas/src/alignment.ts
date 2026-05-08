export interface AlignmentResult {
  resultId: string
  alignmentScore: number
  classification: 'exploring' | 'aligned' | 'activated' | 'guide'
  summary: string
  generatedAtUtc: string
}
