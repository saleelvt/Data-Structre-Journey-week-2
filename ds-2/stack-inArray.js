class Stack{
    constructor(){
        this.stack=[]

    }
    push(value){

        return this.stack.push(value)

    }
    pop(){
       return this.stack.pop()
    }
    print(){
        console.log('my stack items ',this.stack.toLocaleString());
    }
}
const stack= new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.print()