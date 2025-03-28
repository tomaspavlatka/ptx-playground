/**
 * Code: https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 * The algorithm for myAtoi(string s) is as follows:
 *
 * Whitespace: Ignore any leading whitespace (" ").
 * Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
 * Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. 
 * If no digits were read, then the result is 0.
 *
 * Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. 
 * Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
 *
 * Return the integer as the final result.
 */

export function myAtoi(s: string): number {
  const str = s.replace(/\s+/, '');
  const sign = str[0];
  const number = !['-', '+'].includes(sign) ? str : str.slice(1);

  let atoi = '';
  for (let i = 0; i < number.length; i++) {
    const char = number.charCodeAt(i);
    if (char < 48 || char > 57) { // 0 -> 9
      break;
    }
    atoi += number[i];
  }

  const multiplier = sign === '-' ? -1 : 1;
  const res = +atoi * multiplier;

  if (res < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else {
    return res;
  }
};
