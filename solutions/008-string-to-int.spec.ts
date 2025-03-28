import { myAtoi } from "./008-string-to-int";

describe('008-string-to-int', () => {
  it('scenario 1', () => {
    const input = '42';

    const response = myAtoi(input);

    expect(response).toBe(42);
  });

  it('scenario 2', () => {
    const input = '-042';

    const response = myAtoi(input);

    expect(response).toBe(-42);
  });

  it('scenario 2', () => {
    const input = '    -042';

    const response = myAtoi(input);

    expect(response).toBe(-42);
  });

  it('scenario 3', () => {
    const input = '1337c0d3';

    const response = myAtoi(input);

    expect(response).toBe(1337);
  });

  it('scenario 4', () => {
    const input = '0-1';

    const response = myAtoi(input);

    expect(response).toBe(0);
  });

  it('scenario 4', () => {
    const input = '+1';

    const response = myAtoi(input);

    expect(response).toBe(1);
  });

  it('scenario 4', () => {
    const input = "-91283472332"

    const response = myAtoi(input);

    expect(response).toBe(-2147483648);
  });
});
