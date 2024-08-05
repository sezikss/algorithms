/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
    while (true) {
        const num1 = rand7() - 1;
        const num2 = rand7();
        const combinedNum = num1 * 7 + num2;
        if (combinedNum <= 40) {
            return (combinedNum % 10) + 1;
        }
    }
}
