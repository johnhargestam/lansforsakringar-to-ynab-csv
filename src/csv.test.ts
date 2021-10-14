import { split } from "./csv"

describe('split', () => {
  it('splits a string into a list of lines', () => {
    expect(split('1\n2\n3')).toHaveLength(3);
  })
})
