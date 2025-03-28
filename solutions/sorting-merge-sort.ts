/**
 * Sorting: Merge sort
 *
 * Time complexity: best: n log(n), average: n log(n), worst: n log(n)
 * Space complexity: n
 * 
 * @see https://en.wikipedia.org/wiki/Merge_sort
 */

export function mergeSort(data: number[]): number[] {
  if (data.length <= 1) {
    return data;
  }

  const pivot = Math.floor(data.length / 2);
  const left = mergeSort(data.slice(0, pivot))
  const right = mergeSort(data.slice(pivot))

  let result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};
