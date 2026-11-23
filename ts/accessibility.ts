export interface AccessibilityState { reducedMotion: boolean; contrast: "normal" | "high"; }
export const prefersReducedMotion = (): boolean => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
