import { addTwoNumbers, ListNode } from "./002-add-two-numbers";

describe('002-add-two-numbers', () => {
  it('scenario 1', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    const result = addTwoNumbers(l1, l2);

    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));

    expect(result).toStrictEqual(expected);
  });

  it('scenario 2', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);

    const result = addTwoNumbers(l1, l2);

    const expected = new ListNode(0);

    expect(result).toStrictEqual(expected);
  });

  it('scenario 3', () => {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

    const result = addTwoNumbers(l1, l2);

    const expected = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));

    expect(result).toStrictEqual(expected);
  });
});
