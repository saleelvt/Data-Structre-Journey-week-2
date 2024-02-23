let array=[2,3,4,2,1,7,6]


for(i=0;i<array.length;i++){
    let InsersionNumber=array[i]
    let j=i-1;
    while(array[j]>InsersionNumber){

        array[j+1]=array[j]
        j=j-1
    }
    array[j+1]=InsersionNumber

}
console.log('log',array);