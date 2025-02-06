// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
// You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
    const ruleKeys = ['type', 'color', 'name'];
    const keyIndex = ruleKeys.indexOf(ruleKey);
    let count = 0;

    for (i=0; i<items.length; i++){
        if (items[i][keyIndex] === ruleValue) count++;
    } return count

    // check if value in the array of arrays is our ruleValue at the index of the ruleValue input (ruleKeys is conveniently ordered for the indexOf method)
   
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));