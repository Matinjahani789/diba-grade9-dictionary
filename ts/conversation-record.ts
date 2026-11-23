export interface ConversationTurn { speaker: string; english: string; pronunciationFa: string; meaningFa: string; }
export interface ConversationRecord { lesson: number; title: string; turns: ConversationTurn[]; }
