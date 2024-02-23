

class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(value){

        return this.queue.push(value)
    }
    dequeue(){

        return this.queue.shift()
    }
    isFull(){
        return this.queue.length
    }
    isEmpty(){
        return this.queue.length===0
    }
    peek(){
        return this.queue[0]
    }
    getSize(){
        return this.queue.length
    }
    print(){
        console.log('my queue values are ',this.queue.toString());
    }

}
const queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('my queue size',queue.getSize());
console.log('my queeue is full',queue.isFull());
console.log('is my queue an empty',queue.isEmpty());
console.log("my queue peak ealement is",queue.peek());
// queue.dequeue()
queue.print()
