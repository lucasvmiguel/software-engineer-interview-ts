class StackNode<T> {
  value: any;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Stack<T> {
  private top: StackNode<T> | null;
  private length: number;

  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek(): T | null {
    return this.top?.value || null;
  }

  push(value: T): void {
    const node = new StackNode(value);

    node.next = this.top;
    this.top = node;

    this.length++;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const oldTop = this.top;
    this.top = oldTop?.next || null;
    this.length--;

    return oldTop?.value;
  }

  isEmpty(): boolean {
    return this.length <= 0;
  }
}

export class StackAsArray<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  peek(): T | null {
    return this.data?.[this.data.length - 1] || null;
  }

  push(value: T): void {
    this.data.push(value);
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.pop() || null;
  }

  isEmpty(): boolean {
    return this.data.length <= 0;
  }
}
