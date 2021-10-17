export const trim = (contents: string) => contents.trim();

export const chunk = (contents: string) => contents.split(/\r?\n(?:\s*?\r?\n)+/);

export const split = (contents: string) => contents.split(/\r?\n/);
