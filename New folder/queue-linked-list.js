class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
      this.front=node
      this.rear=node
        } else {
           this.rear.next=node
           this.rear=node
        }
        this.size++
    }
    dequeue() {
     if(this.isEmpty()){
        return null
     }else{
        let dequeueItem =this.front.value
        this.front=this.front.next
        this.size--
        return dequeueItem
     }
    }
    print(){
        let curr=this.front
        while (curr) {
            console.log('my queue values ',curr.value);    
        curr=curr.next
        }
    }
    removeGevenIntex(index){
        if(index<0 || index>=this.size){

            console.log('give invalid index');
        }
    if(index===0){

        return this.dequeue()
    }else{
        let curr=this.front
        let prev=null
        let count =0
        while(index>count){

            prev=curr
            curr=curr.next
            count++
        }
        prev.next=curr.next
        this.size--
    }
    }
    reverse(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let stack=[]
            while(!this.isEmpty()){
                stack.push(this.dequeue())
            }
            for(let i=stack.length-1;i>=0;i--){
                this.enqueue(stack[i])
            }
        }
    }
}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
// console.log('s',queue.dequeue());
queue.enqueue(30)
queue.enqueue(40)
queue.reverse()
// queue.removeGevenIntex(1)
queue.print()