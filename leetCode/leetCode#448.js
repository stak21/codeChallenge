/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const num = nums.length;
    let count = 0;
 if (num <= 1) {
     return nums;
 }
 nums.sort();
 
//     for (let i = 1; i <= num; i += 1) {
//         if (i === nums[i]) {
//             while (nums[i + 1] === i) {
//                 nums.splice((i+1), 1);
//             }
//         } else {
//             nums.push(i);
//             count += 1;
//         }
//     }
//     nums.splice(0, num - count);
//     return nums;
 for (let i = 1; i <= num; i += 1) {
     if (nums.includes(i) !== true) {
         nums.push(i);
         count += 1;
     }
 }
 nums.splice(0, num);
 return nums;
}

const array = [4,3,2,7,8,2,3,1];
findDisappearedNumbers(array);