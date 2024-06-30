var reverse = function (num) {
    const reversedNumber = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );
    if (reversedNumber > 2147483647) {
        return 0;
    }
    return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};