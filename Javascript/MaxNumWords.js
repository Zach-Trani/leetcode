/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let count = [];
        for (i=0; i<sentences.length; i++){
            const splitSent = sentences[i].split(' ');
            const sortSent = splitSent.sort((a, b) => a.length - b.length);
            let newCount = count.push(sortSent[sortSent.length-1].length;);
            console.log(newCount);
        }
    };