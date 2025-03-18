/**
 * Code: https://leetcode.com/problems/add-two-numbers/description/
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let res = new ListNode(0);
  let current = res;

  let l1Value = l1;
  let l2Value = l2;
  let carry = 0;

  while (l1Value !== null || l2Value !== null || carry > 0) {
    let partial = (l2Value?.val || 0) + (l1Value?.val || 0) + carry
    if (partial >= 10) {
      partial = partial % 10;
      carry = 1;
    } else {
      carry = 0;
    }


    l1Value = l1Value?.next || null;
    l2Value = l2Value?.next || null;
    current.next = new ListNode(partial);
    current = current.next;
  }

  return res.next;
};

