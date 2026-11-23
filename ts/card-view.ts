export interface CardViewModel { title: string; category: string; pronunciation?: string; meaning?: string; example?: { en: string; fa: string }; canCopy: boolean; isAi: boolean; }
export const cardHasContent = (card: CardViewModel): boolean => Boolean(card.title || card.meaning || card.example);
