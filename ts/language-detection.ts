export type DetectedLanguage = "fa" | "en" | "mixed" | "unknown";
export const detectLanguage = (value: string): DetectedLanguage => { const fa=/[؀-ۿ]/u.test(value); const en=/[A-Za-z]/.test(value); return fa&&en?"mixed":fa?"fa":en?"en":"unknown"; };
