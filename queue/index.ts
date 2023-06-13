class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  private first: QueueNode<T> | null;
  private last: QueueNode<T> | null;
  private length: number;

  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  peek(): T | null {
    return this.first?.value || null;
  }

  enqueue(value: T): void {
    const node = new QueueNode<T>(value);
    if (this.isEmpty()) {
      this.last = node;
      this.first = node;
    } else {
      this.last!.next = node;
      this.last = node;
    }

    this.length++;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const oldFirst = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }

    this.length--;

    return oldFirst?.value || null;
  }

  isEmpty(): boolean {
    return this.length <= 0;
  }
}
