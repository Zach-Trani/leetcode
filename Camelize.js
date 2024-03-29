// Turn a dashed word into camelcase
// https://javascript.info/array-methods

function camelize(str) {
    return str
    .split('-')
    // map(func) – creates a new array from results of calling func for every element.
    .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("border-left-width"));