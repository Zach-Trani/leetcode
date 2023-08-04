// Turn a dashed word into camelcase
// https://javascript.info/array-methods

function camelize(str) {
    return str
    .split('-')
}
console.log(camelize("border-left-width"));