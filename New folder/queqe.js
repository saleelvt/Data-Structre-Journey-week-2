
function quick(array){

    if(array.length<2){

        return array
    }
    let pevot= array[array.length-1]
    let left=[]
    let right=[]

    for(i=0;i<array.length-1;i++){
        if(array[i]<pevot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }

    return [...quick(left),pevot,...quick(right)]

}

console.log('my sorted aray',quick([3,2,1,6,5,4]));