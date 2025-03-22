import { longestPalindrome } from "./005-longest-palindrome";

describe('005-longest-palidrome', () => {
  it('scenario 1', () => {
    const input = '';

    const response = longestPalindrome(input);

    expect(response).toBe('');
  });

  it('scenario 2', () => {
    const input = ' ';

    const response = longestPalindrome(input);

    expect(response).toBe('');
  });

  it('scenario 3', () => {
    const input = 'babad';

    const response = longestPalindrome(input);

    expect(response).toBe('aba');
  });

  it('scenario 4', () => {
    const input = 'cbbd';

    const response = longestPalindrome(input);

    expect(response).toBe('bb');
  });

  it('scenario 5', () => {
    const input = 'a';

    const response = longestPalindrome(input);

    expect(response).toBe('a');
  });

  it('scenario 6', () => {
    const input = 'ac';

    const response = longestPalindrome(input);

    expect(response).toBe('c');
  });
});
