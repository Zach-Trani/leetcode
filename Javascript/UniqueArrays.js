// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, 
// since the extra outcomes are just duplicates.

// PREP - expected to do this - also buys you time. Notice it says were pulling one element from each array.
// paraemters: arr of arrs - no different chars other than pos nums
// returns: all unique arrs that can be made from 1 element from
// examples: see below, we noticed if the sub arr has unique values, we can just mult the num of ele in each arr by eachother

// pattern: permutation or sub arr types questions can be multiplied together?

function solve(arr){
    // get rid of dupes
    // multiply the lengths of each sub arr 
    // return result of the multi
    return arr.reduce( (a,c) => a * new Set(c).size, 1 )
}


console.log(([[1,2],[4],[5,6]]),4)
//  --> 1,4,5 - 1,4,6 - 2,4,5 - 2,4,6
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)