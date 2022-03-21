export const toBase64 = (object: any): string => btoa(encodeURIComponent(JSON.stringify(object)))
export const fromBase64 = (s: string): any => JSON.parse(decodeURIComponent(atob(s)))