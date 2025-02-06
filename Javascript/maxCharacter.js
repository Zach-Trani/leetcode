// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//str -> no funny biz
//char -> "l" -> char that appears most often

function maxCharacter(str){
    //map + count + maxChar
    let charMap = {},
      count = 0,
      maxChar = null
    
    //map for chars in str + freq
    for(const char of str){
      charMap[char] = charMap[char] + 1 || 1
    }
    //loop and find most freq char
    for(const char in charMap){
      if(charMap[char] > count){ //key into the object to access the value
        count = charMap[char]
        maxChar = char
      }
    }
  
    return maxChar
  }
  
  console.log( maxCharacter('Hello World!'), 'l')