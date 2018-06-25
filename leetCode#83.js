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
const LinkedList = require('./myfunc.linklist');

const list = new LinkedList();
list.addNodes(1, 1, 2, 3, 4);

var deleteDuplicates = function (link) {
  //removing duplicates from a listed link
  //ex: 1->1->3->4-> null
  //    1->3->4-> null
  //
  let currentNodePTR = link.head;
  //initial checks
  if (currentNodePTR === null || currentNodePTR.next === null) {
    return currentNodePTR;
  }
  //set currentNodePTR and nextNodePTR to a node
  currentNodePTR = link.head;
  let nextNodePTR = link.head.next;
  //while next does not equal null
  while (nextNodePTR !== null) {
    while (nextNodePTR !== null) {
    //compare each next node with current node and see if it is equal
      if (currentNodePTR.value === nextNodePTR.value) {
        currentNodePTR.next = nextNodePTR.next;
        nextNodePTR.next = null;
        nextNodePTR = currentNodePTR.next;
        link.head = currentNodePTR;
      } else {
        nextNodePTR = nextNodePTR.next;
      }
    }
    nextNodePTR = currentNodePTR.next;
    if (nextNodePTR === null) {
      return link;
    }
    currentNodePTR = currentNodePTR.next;
    nextNodePTR = currentNodePTR.next;
  }
  return link;
};

console.log(deleteDuplicates(list));