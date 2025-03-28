/**
 * Sorting: Quick sort
 *
 * Time complexity: best: n log(n), average: n log(n), worst: n^2
 * Space complexity: log(n)
 * 
 * @see https://en.wikipedia.org/wiki/Quicksort
 */

export function quickSort(data: number[]): number[] {
  if (data.length <= 1) {
    return data;
  }

  const pivot = data[data.length-1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] <= pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  return [...left, pivot, ...right];
};
