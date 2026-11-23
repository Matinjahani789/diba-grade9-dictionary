export interface SourceRecord { raw: string; lineNumber: number; section: string; }
export const isSentenceRecord = (raw: string): boolean => /^R\d{6}\s*\|/.test(raw);
