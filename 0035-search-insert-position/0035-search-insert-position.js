/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return left;
}
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); 
const target2 = 2;
console.log(searchInsert(nums, target2));
const target3 = 7;
console.log(searchInsert(nums, target3)); 
const target4 = 0;
console.log(searchInsert(nums, target4));   