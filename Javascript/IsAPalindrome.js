// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// a word (string), no empty, no special char, no nums, 1 word
// true when word reversible and still the same, false otherwise

// racecar --> true
// blue --> false
// red --> false

function palindrome(word){
    // reverse word
    let wordBackward = word.split('').reverse().join('')

    if (word === wordBackward){
        return true
    } else {
        return false
    }
}


console.log(palindrome('red'), 'false')
console.log(palindrome('racecar'), 'true')
console.log(palindrome('blue'), 'false')