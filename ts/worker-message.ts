import type { SearchQuery } from "./search-query";
export type WorkerRequest = { type: "search"; query: SearchQuery } | { type: "init" };
export interface WorkerResponse<T> { type: "ready" | "results" | "error"; items?: T[]; total?: number; requestId?: number; message?: string; }
