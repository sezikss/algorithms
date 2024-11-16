/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = {};
    const backtrack = (start) => {
        if (start === s.length) return [""];
        if (start in memo) return memo[start];
        const sentences = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end); 
            if (wordSet.has(word)) {
                const subSentences = backtrack(end);
                for (const sub of subSentences) {
                    sentences.push(word + (sub ? " " + sub : ""));
                }
            }
        }
        memo[start] = sentences; 
        return sentences;
    };
    return backtrack(0); 
};
