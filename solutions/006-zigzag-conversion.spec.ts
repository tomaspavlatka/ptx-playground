import { convert } from "./006-zigzag-conversion";

describe('006-zigzag-conversion', () => {
  it('scenario 1', () => {
    const input = '';

    const response = convert(input, 1);

    expect(response).toBe('');
  });

  it('scenario 2', () => {
    const input = 'PAYPALISHIRING';

    const response = convert(input, 3);

    expect(response).toBe('PAHNAPLSIIGYIR');
  });

  it('scenario 3', () => {
    const input = 'PAYPALISHIRING';

    const response = convert(input, 4);

    expect(response).toBe('PINALSIGYAHRPI');
  });

  it('scenario 4', () => {
    const input = 'AB';

    const response = convert(input, 1);

    expect(response).toBe('AB');
  });

  it('scenario 5', () => {
    const input = 'ABCD';

    const response = convert(input, 2);

    expect(response).toBe('ACBD');
  });
});
