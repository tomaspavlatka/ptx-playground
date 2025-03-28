import { insertionSort } from "./sorting-insertion-sort";

describe('sorting-insertion-sort', () => {
  it('scenario 1', () => {
    const input = [1, 5, 7, 4, 9];

    const response = insertionSort(input);

    expect(response).toStrictEqual([1, 4, 5, 7, 9]);
  });
});
