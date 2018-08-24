/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result;
  if (n < 3) {
      return n;
  }
  let step1 = 2;
  let step2 = 3;
  for (let i = 0; i < n - 3; i += 1) {
   result = step1 + step2;   
  step1 = step2;
  step2= result;
  }
  return result;
};

const n = 6;
climbStairs(n);