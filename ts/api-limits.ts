export interface ApiLimit { maxCards: number; windowMs: number; }
export const localApiLimit: ApiLimit = { maxCards:30, windowMs:3_600_000 };
