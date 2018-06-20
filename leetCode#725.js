/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
 }
 let root = new ListNode(1);
 root.next = new ListNode(2);
 root.next.next = new ListNode(3);
 root.next.next.next = new ListNode(4);
 root.next.next.next.next = new ListNode(5);
k = 2;

var splitListToParts = function (root, k) {
  if (!root) {
    return root;
  }

  //set variables
  let current = root;
  let length = 0;
  //get the length of root
  while (current) {
    length++;
    current = current.next;
  }
  let group = length / k;
  current = root;
  //go through root k times
  for (let i = 0; i < k; i++) {
    if (group !== parseInt(group, 10)) {
      group = parseInt(group, 10);
      current = current.next;
    }
    for (let j = 0; j < group; j++) {
      if (group - 1 === j) {
        let temp = current.next;
        current.next = null;
        current = temp;
      }
      current = current.next;
    }
  }
  //go through root group times
  
};
splitListToParts(root,k);