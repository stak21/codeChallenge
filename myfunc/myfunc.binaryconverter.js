var hammingDistance = function(x, y) {
  const queue = [];
  let count = 0;
  const numX = x.toString(2).padStart(50,'0');
  const numY = y.toString(2).padStart(50,'0');
  for (let i = 0; i < numX.length; i += 1) {
    queue.push(numX.charAt(i));
  }
  for (let j = numY.length - 1; j >= 0; j -= 1) {
    if (numY.charAt(j) !== queue.pop()) {
      count += 1;
    }
  }
  count += queue.length;
  return count;
};
console.log(hammingDistance(1501377268, 258791155));