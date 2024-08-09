/**
 * @param {number} x
 * @return {number}
 */
var reverse = function reverseInteger(x) {
    let reversed = 0;
    let sign = Math.sign(x); 
    x = Math.abs(x); 
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit; 
        x = Math.floor(x / 10); 
    }
    reversed = reversed * sign;
    if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) { 
        return 0;
    }
    return reversed;
}