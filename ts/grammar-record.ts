export interface GrammarRecord { title: string; explanation: string; lesson: number; examples: string[]; }
export const hasGrammarExample = (record: GrammarRecord): boolean => record.examples.length > 0;
