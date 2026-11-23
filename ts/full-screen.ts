export interface FullscreenState { active: boolean; supported: boolean; }
export const fullscreenState = (element: Element): FullscreenState => ({ active: document.fullscreenElement === element, supported: Boolean(element.requestFullscreen) });
