export interface Pronunciation { ipa: string; source: "cmu" | "provided" | "ai"; dialect: "en-US" | "unknown"; }
export const isIpa = (value: string): boolean => /[ˈˌɑæəʌɔaɪɛɝɚeɪɪiʊuθðʃʒŋɹ]/u.test(value);
