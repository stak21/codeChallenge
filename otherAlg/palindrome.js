const LinkedList = require('../myfunc/myfunc.linklist');

const isPalindrome = (node) => {
  //we want to check if a linked list is a palindrome
  //to do that we want three pointers, head, slow, fast
  // slow will move one node at a time, fast will move two nodes
  //each movement of slow, we want to push the value into an array
  // once fast is null, we will compare slow with array[i]

  // 1-2-1-null
  // 1-2-2-1-null
  node = node.head;
  if (node === null) {
    return true;
  }
  if (node.next === null) {
    return true;
  }
  let slow = node;
  let fast = node;
  let even = true;
  const container = [];
  while (fast !== null && fast.next !== null) {
    if (fast.next === null) {
      fast = fast.next;
    } else {
      fast = fast.next.next;
      if (fast === null) {
        even = false;
      } else {
        even = true;
      }
    }
    container.push(slow.value);
    slow = slow.next;
  }
  while (slow !== null) {
    if (even) {
      slow = slow.next;
      even = false;
    }
    if (container.pop() !== slow.value) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};

node = new LinkedList(1,2,2,1);
isPalindrome(node);