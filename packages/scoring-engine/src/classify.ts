export function classifyAlignment(score: number): string {
  if (score >= 90) return 'guide'
  if (score >= 70) return 'activated'
  if (score >= 40) return 'aligned'
  return 'exploring'
}
