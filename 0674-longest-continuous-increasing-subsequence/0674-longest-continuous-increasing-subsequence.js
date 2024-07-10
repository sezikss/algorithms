/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  let maxLength = 0
  let currentLength = 0
  for (let i = 0; i < nums.length; i++) {
    if ((i === 0) || (nums[i] > nums[i - 1])) {
      currentLength += 1
    } else {
      currentLength = 1
    }
    maxLength = currentLength > maxLength ? currentLength : maxLength
  }
  return maxLength
}