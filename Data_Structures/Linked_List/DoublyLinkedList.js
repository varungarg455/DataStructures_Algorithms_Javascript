var Node = require('../Utilities/LinkedListNode');

function LinkedList(values) {
    this.head = null;
    this.tail = null;
    if (values != null) {
        this.createList(values);
    }
}

//creating a new list using the array of values
LinkedList.prototype.createList = function (values) {
    for (value of values) {
        this.insertAtEnd(value);
    }
}

//inserting an element at the end of the linked list
LinkedList.prototype.insertAtEnd = function (value) {
    let node = new Node(value);
    node.prev = null;
    //checking if the list is empty
    if (this.head == null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
}

//inserting an element at the start of the linked list
LinkedList.prototype.insertAtStart = function (value) {
    let node = new Node(value);
    node.prev = null;
    //checking if the list is empty
    if (this.head == null) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}

//deleting an element at the end of the linked list
LinkedList.prototype.deleteAtEnd = function () {
    let result = null;
    //checking condition if the list is empty
    if (this.head == null) {
        result = "List is empty";
    } else if (this.head === this.tail) {  //checking condition if the list has only 1 element
        result = this.head.data + " is deleted successfully";
        this.head = null;
        this.tail = null;
    } else {
        let temp = this.head;
        result = this.tail.data + " is deleted successfully";
        while (temp.next != this.tail) {
            temp = temp.next;
        }
        this.tail.prev = null;
        this.tail = temp;
        temp.next = null;
    }
    return result;  
}

//deleting an element at the start of the linked list
LinkedList.prototype.deleteAtStart = function () {
    let result = null;
    //checking condition if the list is empty
    if (this.head == null) {
       result = "List is empty";
    } else{
        result = this.head.data + " is deleted successfully";
        this.head = this.head.next;
        this.head.prev = null;
    }
    return result;
}

//searching an element in the linked list
LinkedList.prototype.searchElement = function (value) {
    let result = null;
    //checking condition if the list is empty
    if (this.head == null) {
        result = "List is empty";
    } else{
        result = "Element " + value + " found in the list";
        let temp = this.head;
        while(temp != null) {
            if(temp.data === value){
                result = "Element " + value + " found in the list";
            }
            temp = temp.next;
        } 
    }
    return result;  
}

//printing the linked list
LinkedList.prototype.printList = function () {
    let temp = this.head;
    let output = "";
    while (temp != null) {
        output = output + temp.data + " -> ";
        temp = temp.next;
    }
    console.log("Linked List : " + output + "NULL");
}

//printing linked list in reverse order
LinkedList.prototype.printListReverse = function () {
    let temp = this.tail;
    let output = "";
    while (temp != null) {
        output = " <- " + temp.data + output;
        temp = temp.prev;
    }
    console.log("Reverse Linked List : " + "NULL" + output);
}

module.exports = LinkedList;