/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let arr = [[1]];
    // arr.push([2,2]);

    for(i=0; i<numRows; i++){
        arr.push([])
    }

    console.log(arr)
};
generate(5);