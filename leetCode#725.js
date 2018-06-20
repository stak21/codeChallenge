
// https://leetcode.com/problems/split-linked-list-in-parts/description/
// given an linked list 1->2->3->4->5
// split the list into k parts with equal elements

// if k = 3, [1->2][3->4][5]
// if k = 4, [1->2][3][4][5]
// if k = 6, [1][2][3][4][5][]



// n % k !== 0, there will always be one extra so add in first list


// n % k === 0, evenly distributed
// n / k = equalCount
// while currentPtr exists
// keep prevPtr and currentPtr
// add currentPtr to results
// iterate eqCount times
// cut
// prev.next = null
// prev = null

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

function getLength(node) {
  let currentPtr = node;
  let length = 0;
  while (currentPtr) {
    length++;
    currentPtr = currentPtr.next;
  }
  return length;
}


// if k = 3, [1->2][3->4][5] eqCount = 6/3 = 2
function splitLL(node, k) {
  const results = [];
  const length = getLength(node);
  const eqCount = Math.floor(length / k);
  let modCounter = length % k;

  let prevPtr = null;
  let currentPtr = node;
  let counter = 0;
  while (currentPtr) {
    if (counter === 0) {
      results.push(currentPtr);
      // cut
      if (prevPtr) {
        prevPtr.next = null;
      }
      counter = eqCount;
      if (modCounter > 0) {
        counter += 1;
        modCounter -= 1;
      }
    } else {
      prevPtr = currentPtr;
      currentPtr = currentPtr.next;
      counter--;
    }
  }
  if (k > length) {
    for (let i = 0; i < k - length; i += 1) {
      results.push(null);
    }
  }
  return results;
}
const l = new Node(1);
l.next = new Node(2);
l.next.next = new Node(3);
l.next.next.next = new Node(4);
l.next.next.next.next = new Node(5);

splitLL(l, 10);
