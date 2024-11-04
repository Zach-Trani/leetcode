// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// arr -> sum
// all pairs two numbers -> arr of pairs of arr

function twoSum(arr, sum){
    // pairs arr
    const pairs = []
    // hash map obj
    const seenNums = {}

    for(const currentNum of arr){
        const diff = sum - currentNum // diff is our other match num that we loop through to find
        if(seenNums[diff]){

            pairs.push([currentNum, diff])
        }else{
            seenNums[currentNum] = true
        }


    }
    
    return pairs

}

console.log( twoSum([1,2,2,3,4], 4), '[[2,2],[3,1]]' )
console.log(twoSum([1, 3, 5, 7], 10), '[[7,3]]')
