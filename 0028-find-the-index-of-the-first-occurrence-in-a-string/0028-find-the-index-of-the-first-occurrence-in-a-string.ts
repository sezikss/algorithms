function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}
const haystack = "hello world";
const needle = "world";
console.log(strStr(haystack, needle)); 