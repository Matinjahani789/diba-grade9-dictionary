export type CardAction = "copy" | "favorite" | "remove";
export interface CardActionResult { action: CardAction; entryId: string; succeeded: boolean; }
