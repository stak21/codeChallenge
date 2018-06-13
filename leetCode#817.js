
//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
} 
var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const G = [3,4];
/*
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let match = false;
  let consecutive = false;
  let count = 0;
  while (head !== null) {
    for (let i = 0; i < G.length; i++) {
      if (head.val === G[i] && consecutive === false) {
        count++;
        consecutive = true;
        match = true;
      } else if (head.val === G[i]) {
        consecutive = true;
        match = true;
      }

      if (i === (G.length - 1) && match === false) {
        consecutive = false;
      }
    }
    head = head.next;
    match = false;
  }
  return count;
};

console.log(numComponents(head, G));
