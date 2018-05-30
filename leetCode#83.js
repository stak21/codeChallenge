/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  //removing duplicates from a listed link
  //ex: 1->1->3->4-> null
  //    1->3->4-> null
  //
      currentNodePTR = head;
  //initial checks
  if(currentNodePTR === null || currentNodePTR.next === null) {
    return currentNodePTR;
  }
  //set currentNodePTR and nextNodePTR to a node
  currentNodePTR = head;
  nextNodePTR = head.next
  //while next does not equal null
  while(nextNodePTR !== null) {
  while(nextNodePTR !== null) {
  //compare each next node with current node and see if it is equal
    if(currentNodePTR.val === nextNodePTR.val) {
      currentNodePTR.next = nextNodePTR.next;
      nextNodePTR.next = null;
      nextNodePTR = currentNodePTR.next;
     } else {
      nextNodePTR = nextNodePTR.next;
    }
  }
      nextNodePTR = currentNodePTR.next;
       if (nextNodePTR === null) {
          return head;
      }   
      currentNodePTR = currentNodePTR.next;
      nextNodePTR = currentNodePTR.next;
  }
      return head;
  }