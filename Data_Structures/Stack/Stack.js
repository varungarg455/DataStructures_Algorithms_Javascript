function Stack() {
    this.array = [];
    this.top = -1;
}

Stack.prototype.push = function (value) {
    this.array.push(value);
    this.top++;
}

Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
    } else {
        this.top--;
        return this.array.pop();
    }
}

Stack.prototype.isEmpty = function () {
    if (this.top < 0) {
        return true;
    } else {
        return false;
    }
}

Stack.prototype.size = function () {
    return this.top++;
}

Stack.prototype.top = function () {
    if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
    } else {
        return array[this.top];
    }
}

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