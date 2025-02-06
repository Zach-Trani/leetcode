// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



/**
 * Nest a for loop going through the vowels within a for loop going through the string and compare the two.
 *
 * @param {*} str
 * @return {*} 
 */
function getCount(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(i=0; i<str.length; i++){
        for(j=0; j<vowels.length; j++){
            if(str[i] === vowels[j]){
                count++;
            }
        };
    }
    return count;
  }
console.log(getCount('hello world'));