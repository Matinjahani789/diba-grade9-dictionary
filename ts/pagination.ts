export interface Pagination { offset: number; limit: number; total: number; }
export const nextOffset = (page: Pagination): number => Math.min(page.total, page.offset + page.limit);
