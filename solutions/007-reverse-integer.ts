/**
 * Code: https://leetcode.com/problems/reverse-integer/
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Input: x = 123
 * Output: 321
 */

export function reverse(x: number): number {
  const reverse = x < 0
    ? +(x.toString().slice(1).split('').reverse().join('')) * -1
    : +(x.toString().split('').reverse().join(''));

  return Math.abs(reverse) > Math.pow(2, 31) ? 0 : reverse;
};
