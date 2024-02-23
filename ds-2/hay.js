// insertion 

// let array=[4,3,2,1,8,6,5]

//  for(i=1;i<array.length-1;i++){
//     let insertionNumber=array[i]
//     let j=i-1
//     while(array[j]>insertionNumber){

//         array[j+1]=array[j]
//         j=j-1
//     }
//     array[j+1]=insertionNumber
//  }
//  console.log(array);


function quick(array){

    if(array.length<2){
        return array
    }
    let pevot=array.length-1
    let right=[]
    let left=[]
    for(i=0;i<array.length-1;i++){
        
        if(array[i]>pevot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quick(left),pevot,...quick(right)]

}
console.log('sorted arrya ',[4,3,2,1,8,6,5]);
