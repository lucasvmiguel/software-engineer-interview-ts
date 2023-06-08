export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  const pivotNumber = arr[pivot];

  const greater: number[] = [];
  const equal: number[] = [];
  const less: number[] = [];

  for (const item of arr) {
    if (item > pivotNumber) {
      greater.push(item);
      continue;
    }

    if (item < pivotNumber) {
      less.push(item);
      continue;
    }

    equal.push(item);
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}
