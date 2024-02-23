
                

// for(i=1;i<array.length;i++){
    
    //     let insertNumber=array[i]
    //     let j=i-1
    //     while(j>=0&&array[j]>insertNumber){
        //         array[j+1]=array[j]
        //         j=j-1
        //     }
        //     array[j+1]=insertNumber
        
        // }
        // console.log(array);
        
        
        
     

let array=[2,4,3,34,2,4]
for(i=1;i<array.length;i++){
    let insertNumber=array[i]
    let j=i-1
    while( array[j]>insertNumber){
        array[j+1]=array[j]
        j=j-1
    }
    array[j+1]=insertNumber
}
console.log(array);





