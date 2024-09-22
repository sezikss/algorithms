/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;
    const rows = new Array(Math.min(numRows, s.length)).fill('');
    let curRow = 0;
    let goingDown = false;
    for (let char of s) {
        rows[curRow] += char; 
        if (curRow === 0) goingDown = true;
        if (curRow === numRows - 1) goingDown = false;
        curRow += goingDown ? 1 : -1;
    }
    return rows.join('');
}
const input = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(input, numRows));  