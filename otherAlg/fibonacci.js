//use two stacks to peek and add both stacks and push the new node to a balanced stack
var peek = array => array[array.length - 1];
var add = (stack1, stack2) => (peek(stack1) + peek(stack2));
var fibNum = (num, sequence = true) => {
  const stack1 = [1];
  const fibSequence = [1, 1];
  if (typeof (num) !== 'number') {
    throw new Error('not a number');
  }
  // first 2 fib sequence is 1
  if (num <= 2) {
    return 1;
  }
  num -= 2;
  for (let i = 0; i < num; i += 1) {
    const nextFib = add(stack1, fibSequence);
    fibSequence.push(nextFib);
    stack1.push(fibSequence[i + 1]);
  }
  //sequence means if you wnat to return the whole sequence or just the nth fib number
  if (sequence) {
    return fibSequence;
  } else {
    return peek(fibSequence);
  }
};
fibNum(3, false);
