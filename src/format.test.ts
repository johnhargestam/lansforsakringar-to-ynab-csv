import { date } from './format';

describe('date', () => {
  it('formats to us date notation', () => {
    expect(date('2021-12-01')).toStrictEqual('12/01/21');
  });
});
