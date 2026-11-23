export interface ThemeChange { previous: "light" | "dark"; current: "light" | "dark"; }
export const nextTheme = (theme: ThemeChange["current"]): ThemeChange["current"] => theme === "light" ? "dark" : "light";
