let array =[4,3,2,6,7,8,2,3,5,6,7,8,9,5,3,3,4,33,3,1,7,9,5,6]
let temp=0
    for(i=0;i<array.length;i++){

        for(j=i+1;j<array.length;j++){

            if(array[i]>array[j]){
                temp=array[i]
                array[i]=array[j]
                array[j]=temp

            }
        }
    }

    console.log('my new array ',array);