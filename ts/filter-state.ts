export type DictionaryFilter = "all" | "lesson-1" | "lesson-2" | "lesson-3" | "lesson-4" | "lesson-5" | "lesson-6" | "grammar" | "practice" | "conversation" | "verbs";
export const isLessonFilter = (filter: DictionaryFilter): boolean => /^lesson-[1-6]$/.test(filter);
