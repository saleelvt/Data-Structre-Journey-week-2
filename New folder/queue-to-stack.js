// class QueueToStack{

//     constructor(){
//         this.queue1=[]
//         this.queue2=[]

//     }

//     push(value){

//             this.queue1.push(value)
//     }

//     QueueToStack(){

//         while(this.queue1.length>1){
//             this.queue2.push(this.queue1.shift())
//         }
//         const poppedItem=this.queue1.shift()

//         [this.queue1,this.queue2]=[this.queue2,this.queue1]

//        return poppedItem
//     }

//     print(){
//         console.log(this.queue1.toLocaleString());
//     }
// }

// const queue=new QueueToStack()

// queue.push(10)
// queue.push(20)
// queue.push(30)
// console.log(queue.QueueToStack());
// queue.print()


class QueueToStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(element) {
      // Enqueue the new element to the empty queue
      this.queue1.push(element);
  
      // Dequeue all elements from the other queue and enqueue them to the new queue
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
  
      // Swap the queues
      let temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    pop() {
      if (this.queue2.length === 0) {
        return "Underflow";
      }
  
      // Dequeue the top element from the non-empty queue
      return this.queue2.shift();
    }
    print(){
      console.log('my stack values are', this.queue2.toLocaleString());
    }
  
    isEmpty() {
      return this.queue2.length === 0;
    }
  }
  
  // Example usage:
  const stack = new QueueToStack();

  console.log('my queue value ',  stack.push(10));
  console.log('my queue value ',  stack.push(20));
  console.log('my queue value ',  stack.push(30));

  
  stack.print()
  console.log(stack.pop()); // Output: 3
  // console.log(stack.pop()); // Output: 2
  // console.log(stack.pop()); // Output: 1
  // console.log(stack.pop()); // Output: Underflow
  