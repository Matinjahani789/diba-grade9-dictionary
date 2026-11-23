import type { AiCard } from "./ai-card";
export interface AiTranslationRequest { query: string; language: "fa" | "en" | "mixed"; model: string; }
export interface AiTranslationResponse { card: AiCard; createdAt: number; }
