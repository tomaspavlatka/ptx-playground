/**
 * Code: https://leetcode.com/problems/longest-palindromic-substring/description/
 * Given a string s, return the longest in s. 
 *
 * Input: s = "babad" 
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 */

export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s.trim();
  }

  let dromes: string[] = [];

  for (let i = 0; i < s.length; i++) {
    dromes.push(expandAround(s, i, i));
    dromes.push(expandAround(s, i, i + 1));
  }

  return dromes.reduce((val, cur) => {
    return val.length > cur.length ? val : cur
  }, '');
};

function expandAround(s: string, l: number, r: number): string {
  while (l >= 0 && r <= s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return s.slice(l + 1, r);
}

