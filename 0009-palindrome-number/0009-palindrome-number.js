var isPalindrome = function (input) {
    const original = input;
    let reversed = 0;

    if (input >= 0 && input <= 9) {
        return true;
    }

    if (input % 10 === 0 || input < 0) {
        return false;
    }

    while (input !== 0) {
        reversed = reversed * 10 + (input % 10);
        input = Math.trunc(input / 10);
    }

    return !(original - reversed);
};