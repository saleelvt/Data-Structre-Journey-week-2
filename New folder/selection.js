

let array = [3, 4, 5, 89, 7, 6, 5];
for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}
console.log('my sorted array: ', array);
console.log('my smallest value is: ', array[0]);

