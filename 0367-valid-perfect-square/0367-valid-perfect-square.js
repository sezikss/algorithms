/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  if (num < 2) return true;
  let left = 0,
    right = num;
  while (left <= right) {
    const middle = Math.floor((right + left) / 2),
      middlePow = middle * middle;
    if (middlePow == num) return true;
    if (middlePow > num) right = middle - 1;
    else left = middle + 1;
  }
  return false;
};