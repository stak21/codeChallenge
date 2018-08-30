var twoSum = function (nums, target) {
  let i;
  let j;
  for (i = 0; i < nums.length; i += 1) {
    for (j = 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};
const num = [1,2,3,4];
twoSum(num, 4);