import { chunk, split } from "./csv"

describe('chunk', () => {
  it('divides a string into an array split on empty lines', () => {
    expect(chunk('a\nb\n\nc\nd')).toStrictEqual(['a\nb', 'c\nd']);
  });

  it('splits on new lines with carriage return', () => {
    expect(chunk('a\r\n\r\nb')).toStrictEqual(['a', 'b']);
  });

  it('splits on multiple lines containing whitespace', () => {
    expect(chunk('a\r\n\t\r\n \nb')).toStrictEqual(['a', 'b']);
  });
})

describe('split', () => {
  it('divides a string into an array of lines', () => {
    expect(split('a\nb\nc')).toStrictEqual(['a', 'b', 'c']);
  });
});
