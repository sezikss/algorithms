/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle === "") return 0;
    if (haystack === "" || needle.length > haystack.length) return -1;
    
    const lps = computeLPSArray(needle);
    let i = 0; 
    let j = 0; 
    while (i < haystack.length) {
        if (needle[j] === haystack[i]) {
            i++;
            j++;
        }
        if (j === needle.length) {
            return i - j;
        } else if (i < haystack.length && needle[j] !== haystack[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return -1;
}

function computeLPSArray(needle) {
    const lps = new Array(needle.length).fill(0);
    let length = 0;
    let i = 1;
    
    while (i < needle.length) {
        if (needle[i] === needle[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}