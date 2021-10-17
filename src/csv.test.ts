import { chunk, explode, label, split, trim } from './csv';

describe('trim', () => {
  it('removes leading whitespace', () => {
    expect(trim('\r\na')).toStrictEqual('a');
  });

  it('removes trailing whitespace', () => {
    expect(trim('a \t\n')).toStrictEqual('a');
  });
});

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
});

describe('split', () => {
  it('divides a string into an array of lines', () => {
    expect(split('a\nb\nc')).toStrictEqual(['a', 'b', 'c']);
  });

  it('divides on new lines with carriage return', () => {
    expect(split('a\r\nb')).toStrictEqual(['a', 'b']);
  });
});

describe('explode', () => {
  it('divides a string into an array splitting on separator', () => {
    expect(explode('a;b;c')).toStrictEqual(['a', 'b', 'c']);
  });

  it('strips quotes', () => {
    expect(explode('"a";"b";"c"')).toStrictEqual(['a', 'b', 'c']);
  });
});

describe('label', () => {
  it('divides a nested array csv into labeled objects', () => {
    expect(
      label([
        ['first', 'second'],
        ['a', 'b'],
        ['j', 'k'],
      ])
    ).toStrictEqual([
      { first: 'a', second: 'b' },
      { first: 'j', second: 'k' },
    ]);
  });
});
