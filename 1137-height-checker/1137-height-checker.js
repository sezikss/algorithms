/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let c = [...heights];
    let count = 0;
    
    c = c.sort((a,b) => a-b);
    
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== c[i]) {
            count++;
        }
    }
    return count;
};;