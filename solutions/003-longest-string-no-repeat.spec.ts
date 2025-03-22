import { longestSubstring } from "./003-longest-string-no-repeat";

describe('003-longest-string-no-repeat', () => {
  it('scenario 1', () => {
    const input = 'abcabcbb';

    const response = longestSubstring(input);

    expect(response).toBe(3);
  });

  it('scenario 2', () => {
    const input = 'bbbbb';

    const response = longestSubstring(input);

    expect(response).toBe(1);
  });

  it('scenario 3', () => {
    const input = 'pwwkew';

    const response = longestSubstring(input);

    expect(response).toBe(3);
  });

  it('scenario 4', () => {
    const input = '';

    const response = longestSubstring(input);

    expect(response).toBe(0);
  });

  it('scenario 5', () => {
    const input = ' ';

    const response = longestSubstring(input);

    expect(response).toBe(1);
  });

  it('scenario 6', () => {
    const input = 'au';

    const response = longestSubstring(input);

    expect(response).toBe(2);
  });
});
