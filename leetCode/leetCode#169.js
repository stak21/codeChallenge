/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let start = 0;
  let end;
  let majority = 0;
  let totalLength = 0;
  let length;

  nums.sort();
  while (start !== nums.length) {
    end = nums.lastIndexOf(nums[start]) + 1;
    length = end - start;
    if (totalLength < length) {
      totalLength = length;
      majority = nums[start];
    }
    start = end;
  }
  if (totalLength > (nums.length / 2)) {
    return  majority;
  } else {
    return null;
  }
};

const array = [
[],
[1],
[1,1],
[1,2],
[1,2,2],
[1,2,2,1],
[1,2,3,4,4,4,4],
[1,1,2,3,4,4,5,5,5,5],
[1,2,3,3,3]

];
for (let i = 0; i < 9; i += 1) {
  console.log(majorityElement(array[i]));
}