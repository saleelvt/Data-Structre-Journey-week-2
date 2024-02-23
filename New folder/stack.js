
class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{

            node.next=this.head
            this.head=node
        }
        this.size++

    }

    append(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    print(){
        let curr=this.head
        while(curr){
            console.log('my list values',curr.value);
            curr=curr.next
        }
    }

}

const list=  LinkedList
// list.prepend(10)
// list.append(20)
// list.print()

module.exports= list