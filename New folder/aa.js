class Stack{
    constructor(){
        this.stack=[]
    }

    getSize(){
        return this.stack.length
    }

    isEmplty(){
        return this.stack.length==0
    }

    push(value){

        this.stack.push(value)
    }
    pop(){
        this.stack.pop()
    }
    print(){

        for(let i=0;i<this.stack.length;i++){

            console.log('my stack items ',this.stack[i]);
        }
    }
}
const list=new Stack()

list.push(10)
list.push(20)
list.push(30)
list.pop()
list.print()

