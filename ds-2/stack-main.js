const LinkedList = require('./stack')

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){

       return this.list.prepend(value)
    }
    pop(value){
        return this.list.append(value)
    }

    peak(){

        return this.list.head.value
    }

    getSize(){
       return this.list.getSize()
    }

    isEmpty(){
       return this.list.isEmpty()
    }
    prindd(){  
        return this.list.print()
    }

}
const stack =new LinkedListStack()



stack.push(10)
stack.push(20)
stack.push(30)



stack.prindd()
console.log('my peak value',stack.peak());


