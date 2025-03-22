import { reverse } from "./007-reverse-integer";

describe('007-reverse-integer', () => {
  it('scenario 1', () => {
    const input = 123;

    const response = reverse(input);

    expect(response).toBe(321);
  });

  it('scenario 2', () => {
    const input = -123;

    const response = reverse(input);

    expect(response).toBe(-321);
  });

  it('scenario 3', () => {
    const input = 120;

    const response = reverse(input);

    expect(response).toBe(21);
  });

  it('scenario 4', () => {
    const input = 1534236469;

    const response = reverse(input);

    expect(response).toBe(0);
  });
});
