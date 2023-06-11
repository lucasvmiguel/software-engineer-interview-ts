export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: any) {
    const node = new Node(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: any) {
    const node = new Node(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  get(index: number): any {
    const node = this.getNode(index);
    return node?.value;
  }

  insert(index: number, value: any) {
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

  private getNode(index: number): Node | null {
    this.validateIndex(index);

    let node: Node | null = this.head;
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

  private addFirstNode(node: Node): void {
    this.head = node;
    this.tail = node;
  }
}

class Node {
  value: any;
  next: Node | null;
  prev: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
