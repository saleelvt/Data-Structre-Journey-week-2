






function mergeSort(array) {

    if (array.length < 2) {
        return array
    }
    let middle = Math.floor(array.length / 2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){

    let sortedArray=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]

}
console.log('hay ',mergeSort([2,3,4,2,1]));
 console.log('saleel');