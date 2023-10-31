// Examples

// non repeating char open parenthesis
// repeating char close parenthesis

// "din" --> "((("
// "recede" --> "()()()"
// "Success" --> ")())())"



const DupeEncoder = (str) => {
    
    const newStr = str.toLowerCase();

    // split -> map indexOf === lastIndexOf ? '(' : ')' -> join -> str
    return str.toLowerCase()
    .split('')
    .map( (c,i,a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')' )
    .join('')
};

console.log(DupeEncoder("hello"))
console.log(DupeEncoder("#$%&*&^%^%&$%^#^%$"))