export const BELIEF_MAPPER_LITE_VERSION = 'belief-mapper-lite-v0.2';
export const BELIEF_MAPPER_LITE_QUESTION_COUNT = 5;
export const BELIEF_MAPPER_LITE_MAX_SCORE = 10;

export function validateBeliefMapperLiteAnswers(answers) {
  if (!Array.isArray(answers)) {
    return { ok: false, error: 'answers_must_be_array' };
  }

  if (answers.length !== BELIEF_MAPPER_LITE_QUESTION_COUNT) {
    return { ok: false, error: 'answers_must_contain_exactly_five_values' };
  }

  const valid = answers.every((value) => Number.isInteger(value) && value >= 0 && value <= 2);
  if (!valid) {
    return { ok: false, error: 'answers_must_be_integers_0_1_or_2' };
  }

  return { ok: true };
}

export function classifyBeliefMapperLiteScore(score) {
  if (!Number.isInteger(score) || score < 0 || score > BELIEF_MAPPER_LITE_MAX_SCORE) {
    throw new RangeError('score_must_be_integer_0_to_10');
  }

  if (score >= 8) return 'strong_alignment';
  if (score >= 5) return 'aligned';
  return 'explorer';
}

export function evaluateBeliefMapperLite(answers) {
  const validation = validateBeliefMapperLiteAnswers(answers);
  if (!validation.ok) {
    const error = new TypeError(validation.error);
    error.code = validation.error;
    throw error;
  }

  const score = answers.reduce((sum, value) => sum + value, 0);

  return {
    version: BELIEF_MAPPER_LITE_VERSION,
    score,
    max_score: BELIEF_MAPPER_LITE_MAX_SCORE,
    classification: classifyBeliefMapperLiteScore(score),
    identity_assigned: false,
    membership_created: false,
  };
}
