/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var res = 0;
    while (num) {
        res += num % 10;
        num = Math.floor(num / 10);
    }
    return res < 10 ? res : addDigits(res);
};