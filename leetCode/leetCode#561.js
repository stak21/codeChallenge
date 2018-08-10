/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // sort
  // grab the smallest of the first two pairs
  // repeat until there are no pairs
  nums.sort(function(a,b){return a - b});

  let min = 0;
  for (let i = 0; i < nums.length; i += 2) {
    const temp = nums[i] < nums[i + 1] ? nums[i] : nums[i + 1];
    min += temp;
  }
  return min;
};
const a = [1,2,3,4];
arrayPairSum(a);