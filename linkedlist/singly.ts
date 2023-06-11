export class SinglyLinkedList {
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
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: any) {
    const node = new Node(value);

    if (this.head === null || this.tail === null) {
      this.addFirstNode(node);
    } else {
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

  debug() {
    console.log(JSON.stringify(this, null, 2));
  }

  private addFirstNode(node: Node): void {
    this.head = node;
    this.tail = node;
  }

  private getNode(index: number): Node | null {
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

class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
