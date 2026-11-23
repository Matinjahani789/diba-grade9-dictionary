export type MotionEvent = "enter" | "leave" | "activate" | "deactivate" | "loading" | "complete";
export interface MotionCommand { target: string; event: MotionEvent; duration: number; }
