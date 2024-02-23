class Stack {
    constructor() {
        this.stack1 = []
        this.stack2 = []

    }
    keetunnu(value) {
        this.stack1.push(value)
    }

    pop() {
        this.stack1.pop()
    }
    peek() {

        console.log('my peek value', this.stack1.length);
    }

    print() {
        console.log('my stack value', this.stack1.toLocaleString());
    }

    stackToQueue() {

        while (this.stack1.length > 0) {

            this.stack2.push(this.stack1.pop())
        }
        console.log('MY QUEUE VALUES',this.stack2.toLocaleString());

    }
}
const stack = new Stack()

stack.keetunnu(10)
stack.keetunnu(20)
stack.keetunnu(30)
stack.keetunnu(40)
// stack.peek()
// stack.pop()
stack.print()
stack.stackToQueue()
