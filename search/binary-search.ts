export function binarySearch(arr: number[], num: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = arr[mid];

    console.log(`left: ${left} | mid: ${mid} | right: ${right}`);

    if (num === midValue) {
      return mid;
    }

    if (num > midValue) {
      left = mid + 1;
    }

    if (num < midValue) {
      right = mid - 1;
    }
  }

  return -1;
}
