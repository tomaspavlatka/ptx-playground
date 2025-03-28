/**
 * Sorting: Bubble sort
 *
 * Time complexity: best: n, average: n^2, worst: n^2
 * Space complexity: 1
 * 
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 */

export function bubbleSort(data: number[]): number[] {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
  }

  return data;
};
