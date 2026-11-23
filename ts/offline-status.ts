export type OfflineState = "loading" | "ready" | "partial" | "failed";
export interface OfflineStatus { state: OfflineState; sentenceCount: number; vocabularyCount: number; cmuCount: number; }
