export interface FloatingSearchState { floating: boolean; threshold: number; top: number; }
export const shouldFloat = (scrollY: number, state: FloatingSearchState): boolean => scrollY > state.threshold;
