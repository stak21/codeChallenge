var divMod = (left) => {
  let temp = left;
  const divTo = [];
  while (temp >= 1) {
    divTo.push(parseInt(temp, 0) % 10);
    temp /= 10;
  }
  return divTo;
};
var selfDividingNumbers = function (left, right) {
  const final = [];
  for (left; left <= right; left += 1) {
    const num = left;
    const divTo = divMod(num);
    divTo.sort();
    if (divTo[0] !== 0) {
      if (divTo.every(item => num % item === 0)) {
        final.push(num);
      }
    }
  }
  return final;
};
selfDividingNumbers(1, 15);