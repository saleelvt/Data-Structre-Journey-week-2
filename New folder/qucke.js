function queckSort(array){

    if(array.length<2){

        return  array
    }

    let  pevot=array[array.length-1]
    let right=[]
    let left=[]
    for(let i =0;i<array.length-1;i++){
        if(array[i]<pevot){
            left.push(array[i])
        }else{
            right.push( array[i])
        }
    }
    return [...queckSort(left),pevot,...queckSort(right)]


}
console.log('queck sorted array ',queckSort([5 ,3,2,21,87,6,5]));
