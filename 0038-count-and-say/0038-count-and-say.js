function countAndSay(n) {
    if (n === 1) return "1";
    let currentTerm = "1";
    for (let i = 1; i < n; i++) {
        let nextTerm = "";
        let count = 1;
        for (let j = 1; j < currentTerm.length; j++) {
            if (currentTerm[j] === currentTerm[j - 1]) {
                count++;
            } else {
                nextTerm += count + currentTerm[j - 1];
                count = 1; 
            }
        }
        nextTerm += count + currentTerm[currentTerm.length - 1];
        currentTerm = nextTerm;
    }
    return currentTerm;
}
const n = 5;
console.log(countAndSay(n));