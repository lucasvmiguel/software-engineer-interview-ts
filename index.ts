import { DoublyLinkedList } from "./linkedlist/doubly";

const linkedList = new DoublyLinkedList();

linkedList.append(3);
linkedList.append(5);
linkedList.append(7);
linkedList.prepend(1);

console.log(linkedList.get(1));

// linkedList.insert(4, 99);
linkedList.remove(4);

linkedList.debug();
console.log("RESULTS");
// console.log(linkedList.head?.value);
// console.log(linkedList.head?.next?.value);
// console.log(linkedList.head?.next?.next?.value);
// console.log(linkedList.head?.next?.next?.next?.value);
