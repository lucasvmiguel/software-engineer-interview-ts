export class SinglyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: T) {
    const node = new Node(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: T) {
    const node = new Node(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
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
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    const prev = this.getNode(index - 1)!;

    node.next = prev?.next;
    prev.next = node;

    this.length++;
  }

  remove(index: number) {
    if (index === 0) {
      this.head = this.head?.next || null;
      this.length--;
      return;
    }

    this.validateIndex(index);

    const prev = this.getNode(index - 1)!;

    prev.next = prev.next?.next || null;

    this.length--;
  }

  reverse() {
    const ll = new SinglyLinkedList<T>();

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      const value = current?.value;
      if (value) {
        ll.prepend(value);
      }
      current = current?.next || null;
    }

    this.head = ll.head;
    this.tail = ll.tail;
  }

  toArray() {
    const arr: T[] = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      const value = current?.value;
      if (value) {
        arr.push(value);
      }
      current = current?.next || null;
    }

    return arr;
  }

  debug() {
    console.log(JSON.stringify(this, null, 2));
  }

  private addFirstNode(node: Node<T>): void {
    this.head = node;
    this.tail = node;
  }

  private getNode(index: number): Node<T> | null {
    this.validateIndex(index);

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }

    return current;
  }

  private validateIndex(index: number) {
    if (index < 0) {
      throw new Error("index cannot be a negative number");
    }

    if (this.length <= index) {
      throw new Error("index to insert is bigger than the size of the array");
    }
  }
}

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
