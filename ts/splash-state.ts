export type SplashPhase = "visible" | "moving-logo" | "fading" | "hidden";
export interface SplashTimeline { phase: SplashPhase; startedAt: number; finishedAt?: number; }
