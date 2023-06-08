// returns the index of a number in the array
// the array must be sorted
function binarySearch(arr: number[], num: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    let mid = arr[midIndex];

    console.log(`left: ${left} | mid: ${midIndex} | right: ${right}`);

    if (num === mid) {
      return midIndex;
    }

    if (num > mid) {
      left = mid + 1;
    }

    if (num < mid) {
      right = mid - 1;
    }
  }

  return -1;
}
