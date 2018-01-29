var LinkedList = require('./Data_Structures/LinkedList');
var DoublyLinkedList = require('./Data_Structures/DoublyLinkedList');
var Stack = require('./Data_Structures/Stack');
var Queue = require('./Data_Structures/Queue');

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
