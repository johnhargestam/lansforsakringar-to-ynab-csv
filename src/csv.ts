export const trim = (contents: string) => contents.trim();

export const chunk = (contents: string) =>
  contents.split(/\r?\n(?:\s*?\r?\n)+/);

export const split = (contents: string) => contents.split(/\r?\n/);

export const explode = (line: string) => line.replace(/"/g, '').split(/;/);

export const label = (lines: string[][]): { [key: string]: string }[] =>
  lines
    .slice(1)
    .map((line) =>
      line.reduce(
        (obj, value, index) => ({ ...obj, [lines[0][index]]: value }),
        {}
      )
    );
