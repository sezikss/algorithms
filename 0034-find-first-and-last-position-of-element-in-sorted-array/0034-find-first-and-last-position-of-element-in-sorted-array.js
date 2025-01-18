/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findBound(isLeft) {
        let left = 0, right = nums.length - 1;
        let bound = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                bound = mid;
                if (isLeft) {
                    right = mid - 1; 
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } 
        return bound;
    }
    let leftIndex = findBound(true);
    let rightIndex = findBound(false);
    return [leftIndex, rightIndex];
};
