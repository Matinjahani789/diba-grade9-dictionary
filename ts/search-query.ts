export interface SearchQuery { text: string; category: string; offset: number; limit: number; requestId: number; }
export interface SearchPage<T> { total: number; offset: number; items: T[]; hasMore: boolean; }
export const clampPage = (offset: number, limit: number): SearchQuery => ({ text: "", category: "all", offset: Math.max(0, offset), limit: Math.min(100, Math.max(1, limit)), requestId: 0 });
