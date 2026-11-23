export interface SearchHistoryRecord { query: string; searchedAt: number; resultCount: number; }
export const recentHistory = (items: SearchHistoryRecord[], limit = 8): SearchHistoryRecord[] => items.slice().sort((a,b)=>b.searchedAt-a.searchedAt).slice(0,limit);
