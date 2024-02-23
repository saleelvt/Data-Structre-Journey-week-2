
class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    print(){
        console.log('my queue values',this.items.toString());
    }
    isEmpty(){
        return this.stack.length===0
    }
    getsize(){
        return this.items.length
    }
    peek(){
        return this.items[0]
    }
}
const list=new Queue()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.dequeue()
console.log('now my size',list.getsize());
console.log('my peek element ', list.peek());
list.print()