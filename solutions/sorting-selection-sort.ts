/**
 * Sorting: Selection sort
 *
 * Time complexity: best: n^2, average: n^2, worst: n^2
 * Space complexity: 1
 * 
 * @see https://en.wikipedia.org/wiki/Selection_sort
 */

export function selectionSort(data: number[]): number[] {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    let value = data[i];

    for (let j = i; j < data.length; j++) {
      if (data[j] < value) {
        value = data[j];
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
  }
  return data;
};
