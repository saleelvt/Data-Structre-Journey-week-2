const linkedList=require('./stack')

class LinkedListStack{
    constructor(){
        this.list=new linkedList()
    }

    push(value){
        return this.list.prepend(value)
    }
    print(){
        return this.list.print()
    }
}
const stack= new LinkedListStack()
stack.push(389)
stack.print()
