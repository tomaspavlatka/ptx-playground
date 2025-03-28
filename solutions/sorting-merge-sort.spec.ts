import { mergeSort } from "./sorting-merge-sort";

describe('sorting-merge-sort', () => {
  it('scenario 1', () => {
    const input = [1, 7, 9, 4, 5];

    const response = mergeSort(input);

    expect(response).toStrictEqual([1, 4, 5, 7, 9]);
  });
});
