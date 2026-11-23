export const normalizePersianEnglish = (value: string): string => value.toLowerCase().replace(/[يى]/g, "ی").replace(/ك/g, "ک").replace(/[ً-ٰٟـ]/g, "").replace(/\s+/g, " ").trim();
export const hasSearchText = (value: string): boolean => normalizePersianEnglish(value).length > 0;
