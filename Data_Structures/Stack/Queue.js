// This is the implementation of queue using javascript

function Queue(){
    this.array = [];
}

Queue.prototype.add = function(value){
    this.array.push(value);
}

Queue.prototype.remove = function(){
    return this.array.shift();
}

Queue.prototype.isEmpty = function(){
    if(this.array.length === 0){
        return true;
    } else{
        return false;
    }
}

Queue.prototype.size = function(){
    return this.array.length;
}

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