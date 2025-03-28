import { bubbleSort } from "./sorting-bubble-sort";

describe('sorting-bubble-sort', () => {
  it('scenario 1', () => {
    const input = [1, 5, 7, 4, 9];

    const response = bubbleSort(input);

    expect(response).toStrictEqual([1, 4, 5, 7, 9]);
  });
});
