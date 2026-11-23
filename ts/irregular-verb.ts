export interface IrregularVerb { base: string; pronunciationFa: string; past: string; participle: string; meaningFa: string; }
export const verbForms = (verb: IrregularVerb): string[] => [verb.base, verb.past, verb.participle];
