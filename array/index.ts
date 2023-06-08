export default class MyArray {
  length: number;
  data: { [index: number]: any };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index: number): any {
    return this.data[index];
  }

  // O(1)
  push(value: any): void {
    this.data[this.length] = value;
    this.length++;
  }

  // O(1)
  pop(): any {
    if (this.length <= 0) return;

    const lastValue = this.data[this.length];

    delete this.data[--this.length];

    return lastValue;
  }

  // O(n)
  delete(index: number): any {
    if (index >= this.length || index < 0) return;

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
