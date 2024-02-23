// let array=[7,4,5,6,7,8,9]

// let small =array[0]

// for(i=0;i<array.length;i++){
//   if(array[i]<small){
//     small=array[i]
//   }
// }
// console.log(small);




let arr=[5,3,2,6,7,89,7,6]
for(let i=0;i<arr.length;i++){
    let min=i
    for (let j =i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
            console.log(j);
        }    
    }
        if(i!=min){ 
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
  
}

console.log(arr);