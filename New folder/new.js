const { Stats } = require("fs")
const { hrtime } = require("process")

class Satack {
    constructor() {
        this.stack1 = []
        this.subStack=[]
        this.queue1 = []
    }
    getsize() {
        return this.stack1.length
    }
    push(value) {
        return this.stack1.push(value)
    }
    pop() {
        return this.stack1.pop()
    }
    StackToQueue() {

        while (this.stack1.length>0) {
            this.queue1.push(this.stack1.pop())
        }
        console.log('my queue vlaues are : ', this.queue1);
    }
    display() {
        if (this.stack1.length) {
            for (let i = 0; i < this.stack1.length; i++) {

                console.log('my stack vlaues are : ',i, this.stack1[i]);
            }
        }
    }
    dequeue(){
        return this.queue1.shift ()
    }

    delete(index){

 
        for(let i=0;i<index;i++){
            this.subStack.push(this.stack1.pop())
        }

             this.stack1.pop()
      
        while(this.subStack.length>0){
            this.stack1.push(this.subStack.pop())
        }

    }
    reverse(){

        while(this.stack1.length>0){
            this.subStack.push(this.stack1.pop())
        }
        
        console.log('sub stack ',this.subStack);
        while(this.subStack.length>0){
            this.stack1.push(this.subStack.pop())
        }
        console.log(' stack1 ',this.subStack);
    }



}
const list=new Satack()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)

// list.display()
list.reverse()

// list.pop()
// list.StackToQueue()
// console.log('my dequeueed value is ', list.dequeue());