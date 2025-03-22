/**
 * Code: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Given a string s, find the length of the longest without duplicate characters.
 *
 * Input: s = "abcabcbb" 
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3.
 */

export function longestSubstring(s: string): number {
  if (s === '') {
    return 0;
  }

   let subs: string[] = [];
   const max = s.length;

   for (let i = 0; i < max; i++) {
     const row: string[] = [];
     row.push(s[i]);

     for (let j = i + 1; j < max; j++) {
       const letter = s[j];
       if (row.includes(letter)) {
         break;
       } else {
         row.push(s[j]);
       }
     } 

     subs.push(row.join(''));
   }
  return Math.max(...subs.map((sub) => sub.length));
  
};

