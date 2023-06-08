// reversing a string
// 'My name is Lucas' => 'sacuL si eman yM'
//
// 1. make sure invalid inputs will not break the function
// 2. the parameter will be handled just in memory
//

function findMiddleIndex(arr: any[]): number {
  return Math.ceil(arr.length / 2);
}

// O(n)
function reverseString(value: string): string {
  // 1. split string into an array
  const chars = value.split("");

  // 1.1 find the middle of the array
  const middleIndex = findMiddleIndex(chars);

  // 2. iterate over the array
  for (let i = 0; i < chars.length; i++) {
    // 3.1. stop in the middle (to not replace all the chars again)
    if (i >= middleIndex) {
      break;
    }

    // 3.2. replace the first element of the array with the last one (and keep doing that)
    const temp = chars[i];
    const endIndex = chars.length - i - 1;

    chars[i] = chars[endIndex];
    chars[endIndex] = temp;
  }

  // 4. transform the array into a string back again (join())
  return chars.join("");
}
