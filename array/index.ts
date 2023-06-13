export default class MyArray<T> {
  length: number;
  data: { [index: number]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index: number): T {
    return this.data[index];
  }

  // O(1)
  push(value: T): void {
    this.data[this.length] = value;
    this.length++;
  }

  // O(1)
  pop(): T | null {
    if (this.length <= 0) return null;

    const lastValue = this.data[this.length];

    delete this.data[--this.length];

    return lastValue;
  }

  // O(n)
  delete(index: number): T | null {
    if (index >= this.length || index < 0) return null;

    const itemToRemove = this.data[index];

    this.shiftItems(index);

    return itemToRemove;
  }

  // O(n)
  private shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
  }
}
