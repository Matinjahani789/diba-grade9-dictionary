export type ThemeMode = "light" | "dark";
export type LessonId = 1 | 2 | 3 | 4 | 5 | 6;
export type EntryKind = "word" | "sentence" | "grammar" | "conversation" | "verb" | "ai";
export interface AppPreferences { theme: ThemeMode; reducedMotion: boolean; pageSize: number; }
