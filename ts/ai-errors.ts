export type AiErrorCode = "missing-key" | "quota" | "network" | "provider" | "invalid-json" | "empty";
export interface AiError { code: AiErrorCode; message: string; retryable: boolean; }
