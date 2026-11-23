export interface MeaningValidation { value: string; accepted: boolean; reason?: string; }
export const validateMeaning = (value: string): MeaningValidation => ({ value: value.trim(), accepted: value.trim().length > 0, reason: value.trim() ? undefined : "معنی خالی است" });
