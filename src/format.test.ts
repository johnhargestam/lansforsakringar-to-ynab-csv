import { amount, date } from './format';

describe('date', () => {
  it('formats to us date notation', () => {
    expect(date('2021-12-01')).toStrictEqual('12/01/21');
  });
});

describe('amount', () => {
  it('formats to us amount notation', () => {
    expect(amount('-1 215,95')).toStrictEqual('-1215.95');
  });
});
