function arraySum(arr, index) {
    if (index < 0) {
        return 0;
    }

    return arr[index] + arraySum(arr, index - 1);
}

const myArray = [1, 2, 3, 4, 5];
const result = arraySum(myArray, myArray.length - 1);

console.log('Sum of the array:', result);
