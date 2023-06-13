export class DoublyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: T) {
    const node = new Node<T>(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: T) {
    const node = new Node<T>(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  get(index: number): T | null {
    const node = this.getNode(index);
    return node?.value || null;
  }

  insert(index: number, value: T) {
    this.validateIndex(index);

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    const prev = this.getNode(index - 1);
    const next = prev?.next || null;

    node.next = next;
    node.prev = prev;
    prev!.next = node;
    next!.prev = node;

    this.length++;
  }

  remove(index: number) {
    this.validateIndex(index);

    if (index === 0) {
      this.head = this.head?.next || null;
      this.head!.prev = null;
      return;
    }

    const node = this.getNode(index);
    const prev = node?.prev || null;
    const next = node?.next || null;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }

    this.length--;
  }

  debug() {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log({ value: node?.value, prev: node?.prev?.value, next: node?.next?.value });
      node = node?.next || null;
    }
  }

  private getNode(index: number): Node<T> | null {
    this.validateIndex(index);

    let node: Node<T> | null = this.head;
    for (let i = 0; i < index; i++) {
      node = node?.next || null;
    }

    return node;
  }

  private validateIndex(index: number) {
    if (index < 0) {
      throw new Error("index cannot be a negative number");
    }

    if (this.length <= index) {
      throw new Error("index to insert is bigger than the size of the array");
    }
  }

  private addFirstNode(node: Node<T>): void {
    this.head = node;
    this.tail = node;
  }
}

class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
