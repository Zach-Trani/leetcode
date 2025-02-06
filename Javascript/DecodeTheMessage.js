// You are given the strings key and message, which represent a cipher key and a secret message, respectively. 
// The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), 
// we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 const decodeMessage = function(key, message) {

    let replKey = key.replaceAll(' ', '');
    let replMessage = message.replaceAll(' ', '');
    let arrKey = replKey.split('');
    let arrMessage = replMessage.split('');

    for (i=0; i<arrMessage.length; i++){
        let 
    }
    
};

 console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));