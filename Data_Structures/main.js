var LinkedList = require('./Linked_List/LinkedList');
var DoublyLinkedList = require('./Linked_List/DoublyLinkedList');
var Stack = require('./Stack/Stack');
var Queue = require('./Stack/Queue');

var list = new DoublyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
list.printListReverse();


/* var stack = new Stack();
stack.push(10);
stack.printStack();
stack.push(15);
stack.push(20);
stack.push(25);
console.log(stack.isEmpty());
stack.printStack(); */

var queue = new Queue();
queue.add(10);
queue.add(20);
queue.add(30);
console.log(`Size of queue is ${queue.size()}`);
queue.printQueue();
console.log(`Removed element ${queue.remove()}\n`);
console.log(`Size of queue is ${queue.size()}`);
queue.printQueue();
