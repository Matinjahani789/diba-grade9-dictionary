export interface MotionProfile { duration: number; easing: string; reduced: boolean; }
export const motionDuration = (profile: MotionProfile): number => profile.reduced ? 0 : Math.max(0, profile.duration);
