var singleNumber = function(nums) {
  nums.sort();
  while (nums) {
      if (nums.includes(nums[0], 1)) {
          nums.shift();
          nums.shift();
      } else return nums[0]
  }
};
let array = [2,2,1];

singleNumber(array);