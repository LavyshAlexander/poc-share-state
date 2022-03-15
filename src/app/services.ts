export const toBase64 = (object: any): string => btoa(JSON.stringify(object))
export const fromBase64 = (s: string): any => JSON.parse(atob(s))