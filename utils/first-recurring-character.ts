// find the first element that occurs for the second time
// [1,2,3,4,2,5,4] => 2
// parameter: number[]
// return: number | undefined
// in memory

// 1. create function to find first element in array that shows up 2 times
// 2. create a set to contain all unique values
// 3. iterate over the array (the parameter)
// 4. check if the number is contained in the set
//   4.1 if yes, return number
//   4.2 if no, add to set
// 5. return undefined if does not find a recurring number

// find first element in array that shows up 2 times - O(n)
export function firstRecurringCharacter(numbers: number[]): number | undefined {
  const set = new Set<number>();

  for (const num of numbers) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }

  return undefined;
}
