// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

 

// Example 1:


// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 const restoreString = function(s, indices) {

    let str = [];
    for(let i=0; i<indices.length; i++){
        str[indices[i]] = s[i];
    }
    return str.join("");  
};

console.log(restoreString('abc', [1, 2, 3]))