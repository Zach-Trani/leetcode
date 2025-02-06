// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// arr -> sum
// all pairs two numbers -> arr of pairs of arr

function twoSum(arr, sum){
    // pairs arr
    const pairs = []
    // hash map obj
    const seenNums = {}
    // loop
    for(const currentNum of arr){
        const diff = sum - currentNum 
        if(seenNums[diff]){ // diff is our other match num that we loop through to find
            //match
            pairs.push([currentNum, diff])
        }else{
            seenNums[currentNum] = true // {currentNum:true}
        }


    }
    
    return pairs

}

console.log( twoSum([1,2,2,3,4], 4), '[[2,2],[3,1]]' )