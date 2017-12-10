var LinkedList = require('./Linked_List/LinkedList');

var list = new LinkedList();
/* list.insertAtStart(10);
list.printList(); */
console.log("Deleting at start : " + list.deleteAtStart());
list.printList();
list.insertAtEnd(5);
list.insertAtEnd(55);
list.insertAtStart(15);
console.log("Deleting at end : " + list.deleteAtEnd());
console.log("Deleting at start : " + list.deleteAtStart());
console.log("Deleting at end : " + list.deleteAtEnd());
console.log("Deleting at start : " + list.deleteAtStart());
list.printList();