
class stackandqueue {
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    push(value){
        this.stack1.push(value)
    }
    pop(){
       return this.stack1.pop()
    }
    getSize(){
        return this.stack1.length
    }
    
}