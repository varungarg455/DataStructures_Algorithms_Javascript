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
    //checking if the list is empty
    if (this.head == null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
}

//inserting an element at the start of the linked list
LinkedList.prototype.insertAtStart = function (value) {
    let node = new Node(value);
    //checking if the list is empty
    if (this.head == null) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
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
        temp.next = null;
        this.tail = temp;
    }
    return result;       //returns null if list is empty
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
        result = "Element not found in the list";
        let temp = this.head;
        do {
            if(temp.data === value){
                result = "Element found in the list";
            }
        } while(temp.next != null);
    }
    return result;       //returns null if list is empty
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

module.exports = LinkedList;