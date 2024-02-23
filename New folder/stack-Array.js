


class stack{
constructor(){
    this.stack1=[]
    this.stack2=[]
}

push(value){
    return this.stack1.push(value)
}
pop(){
    return this.stack1.shift()
}
print(){
    console.log(this.stack1.toLocaleString());
}
stacktoqueue(){

    while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
    }
    
    console.log('my  new queue values',this.stack2.toLocaleString());
}
}
const list=new stack()
list.push('saleel')
list.push(20)
list.push(30)
// list.pop()
list.print()
list.stacktoqueue()