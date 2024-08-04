var frequencySort = function(s) {
     let charDict = {}
    
    for(let char of s){
        if(charDict[char]){
            charDict[char] ++
        }
        else {
            charDict[char] = 1
        }
    }
    
    const sortedArr = Object.entries(charDict)
                        .sort(([,a],[,b]) => b-a)

    return sortedArr.map(([char, freq]) => char.repeat(freq)).join('')
};