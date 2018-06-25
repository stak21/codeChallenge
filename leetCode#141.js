/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} link.head
 * @return {boolean}
 */
const LinkedList = require('./myfunc.linklist');

var hasCycle = function (link) {
  //pre-check
  if (link.head === null) {
    return false;
  }
  //set variables
  let fastNodePTR = link.head.next;
  let slowNodePTR = link.head;
  let moveSlow = 0;
  //create main loop, check if link.head does not equal null
  while (fastNodePTR !== null) {
    // if fast EQ slow
    if (fastNodePTR === slowNodePTR) {
      return true;
    }
    //move fast
    fastNodePTR = fastNodePTR.next;
    //check if slow should move
    if (moveSlow === 1) {
      slowNodePTR = slowNodePTR.next;
      moveSlow = 0;
    //if not then set slowMove to 1
    } else {
      moveSlow = 1;
    }
    //end main loop
  }
  //return false
  return false;
};

const list = new LinkedList();
//Ex:
list.addNodes(1, 2, 3);
list.head.next.next = list.head;
console.log(hasCycle(list));