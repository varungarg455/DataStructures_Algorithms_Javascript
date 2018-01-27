// This is the implementation of queue using javascript

function Queue(){
    this.array = [];
}

//Inserting a new element in the queue
Queue.prototype.add = function(value){
    //element is added at rear in queue
    this.array.push(value);
}

//Removing an element from the queue
Queue.prototype.remove = function(){
    //element is removed from the front of the queue
    return this.array.shift();
}

//Checking if the queue is empty or not
Queue.prototype.isEmpty = function(){
    if(this.array.length === 0){
        return true;
    } else{
        return false;
    }
}

//Getting the size of the queue
Queue.prototype.size = function(){
    return this.array.length;
}

//Printing the queue
Queue.prototype.printQueue = function(){
    console.log("Printing Queue");
    if(this.isEmpty()){
        console.log("Queue is empty");
    } else{
        this.array.forEach(function(value){
            console.log(value);
        });
    }
    console.log("\n");
}

module.exports = Queue;