/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  currentNodePTR = head;
  //removeNode function
  let removeNode = () => {
    let temp = currentNodePTR.next;
    currentNodePTR.next = temp.next;
    temp.next = null;
  }
  //pre-check
  if (head === null) {
    return head;
  }
  else if (val === null) {
    return head;
  }
  //main loop
  while (currentNodePTR !== null) {
    if (head.val === val) {
      head = head.next;
      currentNodePTR = head;
    }
    else if (currentNodePTR.next === null) {
      return head;
    }
    else if (currentNodePTR.next.val === val) {
        removeNode();
    }
    else {
      currentNodePTR = currentNodePTR.next;
    }
  }
    return head;
};