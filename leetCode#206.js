//Reversing a linked list
//1->2->3->4->5->null
//5->4->3->2->1->null
//

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
list.addNodes(1, 2, 3, 4, 5);
const listHead = list.head;

var reverseList = function (head) {
  if (head === null) {
    return head;
  }
  var tail = head;
  let { next: following } = head;
  while (tail.next !== null) {
    tail.next = following.next;
    following.next = head;
    head = following;
    following = tail.next;
  }
  return head;
};

console.log(reverseList(listHead));
