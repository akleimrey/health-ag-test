import { EuroCurrencyPipe } from './euro-currency.pipe';

describe('EuroCurrencyPipe', () => {
  const pipe = new EuroCurrencyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be "100 €"', () => {
    const euroSum: string = pipe.transform(100);
    expect(euroSum.replace(String.fromCharCode(160), ' ')).toEqual('100,00 €');
  });
});
