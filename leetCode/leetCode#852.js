/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let peak = null;
  let index;
  for (let i = 0; i < A.length; i += 1) {
    if (index === null || A[i] > peak) {
      peak = A[i];
      index = i;
    }
  }
  return index;
};