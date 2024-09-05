/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(B, T) {
    B.sort((a,b) => b[1] - a[1])
    let res = 0
    for (let i = 0; T && i < B.length; i++) {
        let count = Math.min(B[i][0], T)
        res += count * B[i][1], T -= count
    }
    return res
};
