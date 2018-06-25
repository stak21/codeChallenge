/**
 * Definition for singly-linked list.
 * function ListNode(value) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const LinkedList = require('./myfunc.linklist');

var removeElements = function (link, value) {
  let currentNodePTR = link.head;
  //removeNode function
  const removeNode = () => {
    const temp = currentNodePTR.next;
    currentNodePTR.next = temp.next;
    temp.next = null;
  };
  //pre-check
  if (link.head === null) {
    return link.head;
  } else if (value === null) {
    return link.head;
  }
  //main loop
  while (currentNodePTR !== null) {
    if (link.head.value === value) {
      link.head = link.head.next;
      currentNodePTR = link.head;
    } else if (currentNodePTR.next === null) {
      return link.head;
    } else if (currentNodePTR.next.value === value) {
      removeNode();
    } else {
      currentNodePTR = currentNodePTR.next;
    }
  }
  return link.head;
};

const list = new LinkedList();
list.addNodes(1, 2, 3);
removeElements(list, 1);
removeElements(list, 2);
removeElements(list, 3);
