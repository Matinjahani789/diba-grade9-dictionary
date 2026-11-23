export interface SentenceEntry { id: string; lesson: string; english: string; pronunciationFa: string; meaningFa: string; pattern: string; }
export const sentenceHasMeaning = (entry: SentenceEntry): boolean => entry.meaningFa.trim().length > 0;
