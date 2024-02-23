const { time } = require("console")
const { Http2ServerRequest } = require("http2")


class Node {
    constructor(value) {

        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    peek() {
        return this.top.value
    }
    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
        this.size++
    }
   
    pop() {
        const poppedItem = this.top.value
        this.top = this.top.next
        this.size--
        return poppedItem
    }
    reverse() {

        if (this.isEmpty()) {
            console.log('stack is emtpy ');
        } else {
            let reversedStack = new Stack()
            while (!this.isEmpty()) {

                reversedStack.push(this.pop())
            }
        }
    }
    removeItemGevenIndex(index) {

        if (index < 0 || index >= this.size) {
            console.log('give valid index');
        }
        if (index === 0) {

            return this.pop()
        }
        let curr = this.top
        let prev = null
        let count = 0
        while (count < index) {
            prev = curr
            curr = curr.next
            count++
        }
        prev.next = curr.next
        this.size--
    }
    reverseString(input) {

        for (let i of input) {
            this.push(i)
        }
        let reversedString = ''
        while (!this.isEmpty()) {
            reversedString += this.pop()
        }
        return reversedString()

    }

    deletemiddle() {
        if (this.isEmpty()) {
            console.log('list is empty ');
        } else {
            let fastpointer = this.top
            let slowpointer = this.top
            let prev = null
            while (fastpointer.next !== null && fastpointer !== null) {
                fastpointer = fastpointer.next.next
                prev = slowpointer
                slowpointer = slowpointer.next
            }
            if (prev != null) {

                prev.next = slowpointer.next
            } else {
                this.top = slowpointer.next
            }
            this.size--
        }
    }
    print() {
        let curr = this.top
        while (curr) {

            console.log('stack values are:', curr.value);
            curr = curr.next
        }
    }

}
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
// stack.reverse()
// stack.removeItemGevenIndex(0)
// stack.deletemiddle()
stack.print()
// console.log('my reversed string ', stack.reverseString('saleel'));
// stack.print()
console.log('my stack size', stack.getSize());
// stack.reverse()
// console.log('my stack poped item ',stack.pop());
console.log('my stack peek value :', stack.peek());
