//This is the implementation of stack using javascript.

function Stack() {
    this.array = [];
    this.top = -1;
}

//Pushing a new element into the stack
Stack.prototype.push = function (value) {
    this.array.push(value);
    this.top++;
}

//Popping an element from the stack
Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
    } else {
        this.top--;
        return this.array.pop();
    }
}

//Checking if the stack is empty or not
Stack.prototype.isEmpty = function () {
    if (this.top < 0) {
        return true;
    } else {
        return false;
    }
}

//Getting the size of the stack
Stack.prototype.size = function () {
    return this.top++;
}

//Getting the top element from the stack
Stack.prototype.top = function () {
    if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
    } else {
        return array[this.top];
    }
}

//Print the stack
Stack.prototype.printStack = function () {
    console.log("Printing stack");
    let temp = this.top;
    if (this.isEmpty()) {
        console.log("Stack is empty");
    } else {
        while (temp >= 0) {
            console.log(this.array[temp]);
            temp--;
        }
    }
    console.log("\n");
}

module.exports = Stack;