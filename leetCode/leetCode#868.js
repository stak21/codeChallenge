//leetCode challenge to count the spaces between 1's in a binary number
const binaryGap = (n) => {
  let count = 0;
  let current;
  let next;
  let max = 0;

  let num = n.toString(2).padStart(50, '0');
  current = num.indexOf('1');
  num = num.substring(current);
  num = num.split('');
  num.splice(0, 1);
  current = 0;
  count += 1;

  while (current !== -1) {
    next = num.findIndex(item => item === '1');
    num.splice(next, 1);
    if (next === -1) {
      return max;
    }
    next += count;
    count += 1;

    max = (next - current) > max ? (next - current) : max;
    current = next;
  }
  return max;
};
binaryGap(13);