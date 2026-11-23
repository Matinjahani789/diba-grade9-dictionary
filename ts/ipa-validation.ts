export interface IpaValidation { value: string; valid: boolean; }
export const validateIpa = (value: string): IpaValidation => ({ value, valid: value.length > 0 && /[ˈˌɑæəʌɔɪɛɝɚʊθðʃʒŋ]/u.test(value) });
