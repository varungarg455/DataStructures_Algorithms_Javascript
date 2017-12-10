var LinkedList = require('./Linked_List/LinkedList');

var list = new LinkedList();
list.insertAtStart(10);
list.printList();
console.log("Deleting at start : " + list.deleteAtEnd());
list.printList();
list.insertAtEnd(5);
list.insertAtEnd(55);
list.insertAtStart(15);
console.log("Searching element : " + list.searchElement(55));
list.printList();