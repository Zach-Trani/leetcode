// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// array
// num

function sumMix(arr){

    // solve with forEach

    // let total=0;
    // arr.forEach((el) => {
    //     total+=Number(el)
    // })


    // solve with reduce

    const sum = arr.reduce((total, item) => {
        return total + Number(item)
    }, 0)
    return sum

}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);