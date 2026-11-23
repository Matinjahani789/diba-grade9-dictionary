export interface FavoriteRecord { id: string; savedAt: number; kind: string; title: string; payload: unknown; }
export const sortFavorites = (items: FavoriteRecord[]): FavoriteRecord[] => [...items].sort((a,b) => b.savedAt-a.savedAt);
