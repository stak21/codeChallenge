/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //pre-check
    if (head === null) {
      return false;
    }
    //set variables
    let fastNodePTR = head.next;
    let slowNodePTR = head;
    let moveSlow = 0;
    //create main loop, check if head does not equal null
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
      }
      //if not then set slowMove to 1
      else {
        moveSlow = 1;
      }
      //end main loop
    }
      //return false
      return false;
};