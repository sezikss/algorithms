/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let windowSum = 0
    let output = Infinity;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd];
      while (windowSum >= s) {
        output = Math.min(output, windowEnd - windowStart + 1);
        windowSum -= nums[windowStart];
        windowStart++; 
      }
    }
    return output == Infinity ? 0 : output;
};