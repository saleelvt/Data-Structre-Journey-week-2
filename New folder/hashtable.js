class hashTable{
    constructor(size){

        this.table= new Array(size)
        this.size=size
    }

    hash(key){
        let sum=0;
         for(let i=0;i<key.length;i++){
            sum+=key.charCodeAt(i)
         }
         return sum%this.size
    }

    set(key,value){
        let index=this.hash(key) 
        // this.table[index]=value
        const bucket=this.table[index]
        if(!bucket){
           this.table[index]=[[key,value]]
        }else{
            const samekeyItem= bucket.find(item => item[0]===key)
            if(samekeyItem){
                samekeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
       const  index=this.hash(key)
        // return this.table[index]
        const bucket=this.table[index]
        if(bucket){
            const samekeyItem=bucket.find(item=> item[0]===key)
            if(samekeyItem){
                return samekeyItem[1]
            }
        }
        return undefined

    }
    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=> item[0]===key)
            if(sameKeyItem){
             bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    
    display(){

        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log('my table values are',i,this.table[i]);
            }
        }
    }
}

const table=new hashTable(50)
table.set('name','saleel')
table.set('naem','jasappan')

table.set('age',21)
// table.remove('name')  
console.log('myget values ',table.get('name'));
console.log('get values ',table.get('age'));

table.display()































// class HashTable{

//     constructor(size){

//         this.table= new Array(size)
//         this.size=size

//     }

//     hash(key){

//         let sum=0
//         for(let i=0;i<this.table.length;i++){

//             sum+=key.charCodeAt(i)
//         }
//         return sum%this.size

//     }

//     set(key,value){

//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){

//         let index=this.hash(key)
//         return this.table[index]
        

//     }
//     remove(key){

//         let index=this.hash(key)
//         this.table[index]=undefined
//     }

//     display(){

//                 for(let i=0;i<this.table.length;i++){
//                     if(this.table[i]){
//                         console.log('my table values are',i,this.table[i]);
//                     }
//                 }
//             }
// }

// const  hay=new HashTable(50)

// // hay.set('name','saleel')
// hay.set('mane','ijaz')
// hay.set('age',25)
// console.log('value',hay.get('naem,fg'));

// hay.display()