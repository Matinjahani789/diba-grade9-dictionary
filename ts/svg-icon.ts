export interface SvgIconRef { name: string; path: string; title: string; }
export const svgPath = (name: string): string => `assets/svg/${name}.svg`;
