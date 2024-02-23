







function quiue(array ) {

    if(array.length<2){
        return array
    }

    let pevot=array.length-1
    let left=[]
    let right=[]
    for(i=0;i<array.length-1;i++){
        
        if(array[i]<pevot){

            left.push(array[i])

        }else{
            right.push(array[i])
        }
    }
    return [...quiue(left),pevot,...quiue(right)]

    
}




console.log(quiue([3,4,2,1,6]));
