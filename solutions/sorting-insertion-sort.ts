/**
 * Sorting: Insertion sort
 *
 * Time complexity: best: n, average: n^2, worst: n^2
 * Space complexity: 1
 * 
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 */

export function insertionSort(data: number[]): number[] {
  for (let i = 1; i < data.length; i++) {
    const value = data[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (data[j] > value) {
        data[j + 1] = data[j];
      } else {
        break;
      }
    }

    data[j + 1] = value;
  }

  return data;
};
