var LinkedList = require('./Linked_List/LinkedList');

var list = new LinkedList([1, 2, 3, 4, 5]);
list.insertAtStart(10);
list.printList();
list.deleteAtStart();
list.printList();
list.deleteAtEnd();
list.printList();