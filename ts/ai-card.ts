export interface AiCard { headword: string; original: string; pronunciationIpa: string; pronunciationFa: string; meaningFa: string; partOfSpeech: string; exampleEn: string; examplePronunciationFa: string; exampleFa: string; synonyms: string[]; antonyms: string[]; contentType: "word" | "sentence"; }
export type AiCardResult = { ok: true; card: AiCard } | { ok: false; reason: string };
