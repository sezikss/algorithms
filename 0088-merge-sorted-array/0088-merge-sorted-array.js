/**
 * @param {number[]} nums1 - First sorted array, with additional space for nums2
 * @param {number} m - Number of elements in nums1
 * @param {number[]} nums2 - Second sorted array
 * @param {number} n - Number of elements in nums2
 * @return {void} - Do not return anything, modify nums1 in-place instead
 */
var merge = function(nums1, m, nums2, n) {
    // Set two pointers for nums1 and nums2
    let i = m - 1; // Pointer for the last element of nums1
    let j = n - 1; // Pointer for the last element of nums2
    let k = m + n - 1; // Pointer for the last position of the merged array

    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // No need to handle remaining elements in nums1 since they're already in place
};

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
