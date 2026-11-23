export interface Lesson { id: 1 | 2 | 3 | 4 | 5 | 6; titleEn: string; titleFa: string; grammar: string; }
export const lessonLabel = (lesson: Lesson): string => `درس ${lesson.id} · ${lesson.titleFa}`;
