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

const LinkedList = require("../myfunc/myfunc.linklist");

var middleNode = function (head) {
  let fast = head;
  let slow = head;
  let odd = true;

  while (fast.next !== null) {
    if (odd === true) {
      odd = false;
    } else {
      odd = true;
    }
    fast = fast.next;
    if (odd === false) {
      slow = slow.next;
    }
  }

  return slow;
};

const ll = new LinkedList(1, 2, 3, 4, 5);

middleNode(ll.head);