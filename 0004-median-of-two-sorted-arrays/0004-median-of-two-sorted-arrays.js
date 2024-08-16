/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1
  let B = nums2
  const total = A.length + B.length
  const half = Math.floor(total / 2)
  if (A.length > B.length) {
    ;[A, B] = [B, A]
  }
  let left = 0
  let right = A.length - 1
  while (true) {
    const midA = Math.floor((left + right) / 2)
    const midB = half - midA - 2 
    const leftA = midA >= 0 ? A[midA] : -Infinity
    const rightA = midA + 1 < A.length ? A[midA + 1] : Infinity
    const leftB = midB >= 0 ? B[midB] : -Infinity
    const rightB = midB + 1 < B.length ? B[midB + 1] : Infinity
    if (leftA <= rightB && leftB <= rightA) {
      if (total % 2) {
        return Math.min(rightA, rightB)
      }
      return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
    } else if (leftA > rightB) {
      right = midA - 1
    } else {
      left = midA + 1
    }
  }
}