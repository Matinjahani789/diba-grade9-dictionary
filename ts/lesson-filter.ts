export interface LessonFilterState { active: string; lesson?: number; includeExamples: boolean; }
export const lessonNumber = (filter: string): number | undefined => { const match=/^lesson-([1-6])$/.exec(filter); return match ? Number(match[1]) : undefined; };
