/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    const totalNumbers = 1 << n; // 2^n
    for (let i = 0; i < totalNumbers; i++) {
        result.push(i ^ (i >> 1));
    }
    return result;
};
console.log(grayCode(2)); // Output: [0, 1, 3, 2]
