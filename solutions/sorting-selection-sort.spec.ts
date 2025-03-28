import { selectionSort } from "./sorting-selection-sort";

describe('sorting-selection-sort', () => {
  it('scenario 1', () => {
    const input = [1, 7, 9, 4, 5];

    const response = selectionSort(input);

    expect(response).toStrictEqual([1, 4, 5, 7, 9]);
  });
});
