import { quickSort } from "./sorting-quick-sort";

describe('sorting-quick-sort', () => {
  it('scenario 1', () => {
    const input = [1, 7, 9, 4, 5];

    const response = quickSort(input);

    expect(response).toStrictEqual([1, 4, 5, 7, 9]);
  });
});
