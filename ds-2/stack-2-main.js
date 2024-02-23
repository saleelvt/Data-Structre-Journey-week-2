const List =require('./stack-2')

class LinkedListStack{
    constructor(){

          this.list= new List()
    }

    push(value){

        return this.list.prepend(value)
    }
    print(){
        return this.list.print()
    }
    getSize(){
        return this.list.getSize()
    }
    
}
const stack=new LinkedListStack()

stack.push(999)
console.log('size', stack.getSize());
stack.print()

