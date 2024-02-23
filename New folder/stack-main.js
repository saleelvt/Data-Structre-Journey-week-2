// const list = require('./stack')
const LinkedList=require('./stack')

class LinkedListStack{
    constructor(){
        this.list=new LinkedList()
    }

push(value){
  return  this.list.prepend(value)
}

pop(value){

    return this.list.append(value)
}
 print(){
    return this.list.print() 

}

}

const List=new LinkedListStack()
List.push(29)
List.print()