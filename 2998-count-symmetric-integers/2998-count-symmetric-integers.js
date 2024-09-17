/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        let str = i + ''
        if (str.length % 2 === 0) {
            let left = str.slice(0, str.length / 2)
            let right = str.slice(str.length / 2)
            let n1 = 0;
            let n2 = 0
            for (let i = 0; i < left.length; i++) {
                n1 += Number(left[i])
                n2 += Number(right[i])
            }
            if (n1 === n2) count++
        }
    }
    return count
};