export interface ReminderEntry { word: string; meaning: string; lesson: number; }
export const reminderText = (entry: ReminderEntry): string => `${entry.word} — ${entry.meaning}`;
