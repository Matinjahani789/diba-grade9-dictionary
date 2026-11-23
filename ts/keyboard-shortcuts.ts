export interface KeyboardShortcut { key: string; ctrl?: boolean; meta?: boolean; action: string; }
export const shortcutMatches = (event: KeyboardEvent, key: string): boolean => event.key.toLowerCase() === key.toLowerCase() && !event.altKey;
