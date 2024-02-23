//Bubble Sort
//Selection Sort
//Insertion Sort
//Quick Sort
//Merge Sort
//Hash Table with collision handling
//is valid parenthesis
//queue using stack
//stack implementation using liked list and removing the middle
//queue implementation using linklist




// class Queue{
//     constructor(){
//         this.items=[];
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'underflow';
//         }
//         return this.items.shift();
//     }

//     isEmpty(){
//         return this.items.length===0;
//     }

//     size(){
//         return this.items.length;
//     }
// }

// class StackusingQueue{
//     constructor(){
//         this.queue1=new Queue()
//         this.queue2=new Queue()
//     }

//     push(element){
//         this.queue1.enqueue(element)
//     }

//     pop(){
//         if(this.queue1.isEmpty()){
//             return 'underflow'
//         }
//         while(this.queue1.size()>1){
//             this.queue2.enqueue(this.queue1.dequeue())
//         }

//         const poppedelement=this.queue1.dequeue();

//         const temp=this.queue1;
//         this.queue1=this.queue2;
//         this.queue2=temp;

//         return poppedelement;
//     }

//     display(){
//         console.log("stack items are ",this.queue1.items)
//     }
// }


// const stack=new StackusingQueue()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// stack.display();

// console.log(stack.pop())

// console.log("after popped")

// stack.display()



// Valid Parathesis

// function isValidParenthesesArray(arr){
//     let isValid=(str)=>{
//         let stack=[]
//         let pairs={
//             "(":")",
//             "{":"}",
//             "[":"]"
//         }
//         for (x of str){
//             if(pairs[x]){
//                 stack.push(x)
//             }else if(x===")"||x==="}"||x==="]"){
//                 if(pairs[stack.pop()]!=x){
//                     return false
//                 }
//             }
//         }
//         return true
//     }
//     return arr.map(isValid)
// }
// let arr=["()","{()}{)"]
// let result=isValidParenthesesArray(arr)
// console.log(result)









// Implementing Queue using Stack

// let stack1=[]
// let stack2=[]

// function Enqueue(value){
//     stack1.push(value)
// }

// function dequeue(){
//     if(stack2.length===0){
//         if (stack1.length===0){
//             console.log("the queue is empty");
//         }else{
//             while(stack1.length>0){
//                 let p=stack1.pop()
//                 stack2.push(p)
//             }
//         }
//     }
//     while(stack2.length>0){
//         console.log(stack2.pop());
//     }
// }

// Enqueue(10)
// Enqueue(20)
// dequeue()



// Queue using linkedlist

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.count=0
//     }
//     enqueue(value){
//         const newNode=new Node(value)
//         if (this.count===0){
//            this.front=newNode
//         }else{
//             this.rear.next=newNode
//         }
//         this.rear=newNode
//         this.count++
//     }
//     dequeue(){
//         if(this.count===0){
//             console.log("the queue is empty");
//         }else {
//             let deletedValue=this.front.value
//             if(this.count===1){
//                 this.rear=null
//                 this.front=null
//             }else{
//                 this.front=this.front.next
//             }
//             this.count--
//             return deletedValue
//         }
//     }
//     print(){
//         let curr=this.front
//         while(curr){
//             console.log(curr.value);
//             curr=curr.next
//         }
//     }
// }
// const queue=new Queue()
// queue.enqueue(100)
// queue.enqueue(100)
// queue.enqueue(100)
// queue.dequeue()
// queue.print()

// stack using linklist

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }



// class Stack{
//     constructor(){
//         this.top=null
//         this.count=0
//     }

//     push(value){
//         const newNode=new Node(value)
//         newNode.next=this.top
//         this.top=newNode
//         this.count++
//     }

//     pop(){
//         let temp=this.top
//         this.top=this.top.next
//         this.count--
//         return temp.value
//     }

//     size(){
//         return this.count
//     }

//     isEmpty(){
//         return this.count===0
//     }

//     peek(){
//         return this.top.value
//     }
//     RemoveMiddle(){
//         let mid=Math.floor(this.count/2)
//         let tempStack=new Stack()
//         for(let i=0;i<mid;i++){
//             tempStack.push(this.pop())
//         }
//         this.pop()

//         while(!tempStack.isEmpty()){
//             this.push(tempStack.pop())
//         }
//     }

//     print(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.value);
//             temp=temp.next
//         }

//     }



// }

// const stack=new Stack()

// // console.log(stack.isEmpty())

// console.log(("before removing the stack is"));

// stack.push(150)
// stack.push(200)
// stack.push(1050)
// stack.push(2000)
// stack.push(2500)
// stack.print()

// stack.RemoveMiddle()
// console.log(("After removing the stack is"));
// stack.print()




// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.size());






// stack using array

// class Stack{
//     constructor(){
//         this.items=[]
//         this.count=0
//     }

//     push(element){
//         this.items[this.count]=element
//         this.count++
//     }

//     pop(){
//         console.log( this.items[this.count-1])
//         this.count--
//     }
//     peek(){
//         console.log( this.items[this.count-1])
//     }
//     print(){
//         if (this.count===0){
//             console.log("the stack is empty");
//         }else{
//             let str=""
//             for (let i=0;i<this.count;i++){
//                 str+=this.items[i]+ " "
//             }
//             console.log(str);
//         }
//     }
// }

// const stack=new Stack()

// stack.push(100)
// stack.push(100)
// stack.push(100)
// stack.push(100)
// stack.push(1111111111)
// stack.print()
// stack.peek()





//Hash Table with Collision Handling

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size=size
//     }

//     hashfunction(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index=this.hashfunction(key)
//         let bucket=this.table[index]
//         if (!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let findValue=bucket.find(item=>item[0]===key)
//             if(findValue){
//                 findValue[1]=value
//             }else{
//                 bucket.push([key, value])
//             }
//         }
//     }

//     get(key){
//         const index=this.hashfunction(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let findValue=bucket.find(item=>item[0]===key)
//                 if (findValue){
//                     return findValue[1]
//                 }else{
//                     return undefined
//                 }            
//         }else{
//             return undefined
//         }  
//     }

//     remove(key){
//         const index=this.hashfunction(key)
//         let bucket=this.table[index]
//         if (bucket){
//             const findValue=bucket.find(item=>item[0]===key)
//             if (findValue){
//                 bucket.splice(bucket.indexOf(findValue),1)
//             }else{
//                 console.log("value not found");
//             }
//         }else{
//             console.log("value not found");
//         }
//     }

//     print(){
//         for(let i=0;i<this.size;i++){
//             if (this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table=new hashTable(100)

// table.set("name","Sreejith")
// table.set("naem","Sreejith")
// table.set("Age", 42)
// table.print()

// console.log("after remove");

// table.remove("Age")
// table.print()







// arr=[10,150,2,-15,-1.223,-1.25,4578]

// //Merge Sort

// function mergeSort(arr){
//     if (arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//    return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sortArr=[]
//     while(left.length && right.length){
//         if (left[0]<=right[0]){
//             sortArr.push(left.shift())
//         }else{
//             sortArr.push(right.shift())
//         }
//     }
//     return [...sortArr,...left,...right]
// }

// console.log(mergeSort(arr));


//Quick Sort

// function QuickSort(arr){
//     if (arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]

//     for(let i=0;i<arr.length-1;i++){
//         if (arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }

// console.log(QuickSort(arr));



//Insersion Sort

// for(let i=1;i<arr.length;i++){
//     let numberToInsert=arr[i]
//     j=i-1
//     while(j>=0 && arr[j]>numberToInsert){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=numberToInsert
// }

// console.log(arr);


//Selection Sort

// for(let i=0;i<arr.length;i++){
//     let min=i
//     for (let j =i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }
//     }
//         if(i!=min){
//             let temp=arr[i]
//             arr[i]=arr[min]
//             arr[min]=temp
//         }
  
// }

// console.log(arr);

//Bubble Sort

// let count=1
// while (count>0){
//     count=0
//     for(let i=0;i<arr.length-1;i++){
//         if (arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             count ++
//         }
//     }
// }
// console.log(arr);