export type CacheStrategy = "cache-first" | "network-first" | "stale-while-revalidate";
export const strategyFor = (path: string): CacheStrategy => path.includes("data-") ? "cache-first" : "stale-while-revalidate";
