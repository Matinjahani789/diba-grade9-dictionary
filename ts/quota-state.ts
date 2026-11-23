export interface QuotaState { limit: number; remaining: number; nextAvailableAt: number | null; windowMs: number; }
export const quotaIsAvailable = (state: QuotaState): boolean => state.remaining > 0;
