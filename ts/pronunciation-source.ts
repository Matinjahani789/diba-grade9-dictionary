export type PronunciationSource = "CMUdict American English" | "source Persian approximation" | "AI generated";
export interface PronunciationDetail { text: string; source: PronunciationSource; }
