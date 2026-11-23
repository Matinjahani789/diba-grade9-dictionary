export interface RankedEntry { score: number; id: string; text: string; }
export const rankByScore = <T extends RankedEntry>(items: T[]): T[] => items.slice().sort((a,b)=>b.score-a.score);
