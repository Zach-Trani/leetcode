// Binary Search using sorted numbers

const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle !== val && start <= end]) {

    }
}

// const BinarySearch = (arr, val) => {
//     let leftPointer = 0;
//     let rightPointer = arr.length -1;
//     let middlePointer = Math.floor((arr.length)/2); // round down

//     while (leftPointer < rightPointer)   {
//         console.log(leftPointer, middlePointer, rightPointer);
//         if (val === arr[middlePointer]) {
//             return middlePointer;
//         } else if (val > arr[middlePointer]) {
//             leftPointer = middlePointer + 1;
//             middlePointer = Math.floor((leftPointer + rightPointer)/2);
//         } else if (val < arr[middlePointer]) {
//             rightPointer = middlePointer - 1;
//             middlePointer = Math.floor(rightPointer/2)

//         }
//     };
//      return -1;
// } 
// console.log(BinarySearch([1,2,3,4,5,6,7,8,9], 6));

// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
//              [4, 5]
//              SME --> for start, middle, end