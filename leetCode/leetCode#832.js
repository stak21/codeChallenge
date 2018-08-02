/**
 * @param {number[][]} A
 * @return {number[][]}
 * reverse each array
 * invert each element in the inner array
 * 2 loops
 */
var flipAndInvertImage = function (A) {
  A = A.map((item) => {
    item.reverse();
    for (let i = 0; i < item.length; i += 1) {
      if (item[i] === 0) {
        item[i] = 1;
      } else {
        item[i] = 0;
      }
    }
    return item;
  });
  return A;
};
const array = [[1, 1, 1], [1, 1, 0], [1, 0, 0], [0, 0, 0]];
flipAndInvertImage(array);