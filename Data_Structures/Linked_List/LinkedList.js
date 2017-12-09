var Node = require('../Utilities/LinkedListNode');

function LinkedList(values){
    this.head = null;
    this.tail = null;
    if(values != null){
        this.createList(values);
    }
}

//creating a new list using the array of values
LinkedList.prototype.createList = function(values) {
    for(value of values){
        this.insertAtEnd(value);
    }
}

//inserting an element at the end of the linked list
LinkedList.prototype.insertAtEnd = function(value){
    let node = new Node(value);
    if(this.head == null){
        this.head = node;
        this.tail = node;
    } else{
        this.tail.next = node;
        this.tail = node;
    }
}

//inserting an element at the start of the linked list
LinkedList.prototype.insertAtStart = function(value){
    let node = new Node(value);
    if(this.head == null){
        this.head = node;
        this.tail = node;
    } else{
        node.next = this.head;
        this.head = node;
    }
}

//deleting an element at the end of the linked list
LinkedList.prototype.deleteAtEnd = function(){
    let temp = this.head;
    let value = this.tail;
    while(temp.next != this.tail){
        temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
    return value;
}

//deleting an element at the start of the linked list
LinkedList.prototype.deleteAtStart = function(){
    let value = this.head;
    this.head = this.head.next;
    return value;
}


LinkedList.prototype.printList = function(){
    let temp = this.head;
    let output = "";
    while(temp != null){
        output = output + temp.data + " -> ";
        temp = temp.next;
    }
    console.log(output + "NULL");
}

module.exports = LinkedList;