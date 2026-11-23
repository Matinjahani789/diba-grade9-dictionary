export interface ContentCard { kind: string; title: string; text: string; sourceId?: string; }
export const cardTextLength = (card: ContentCard): number => card.title.length + card.text.length;
