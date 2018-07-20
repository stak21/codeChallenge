
//Definition for singly-linked list.
const LinkedList = require('./myfunc.linklist');

/*
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (link, G) {
  let match = false;
  let consecutive = false;
  let count = 0;
  while (link.head !== null) {
    for (let i = 0; i < G.length; i++) {
      if (link.head.value === G[i] && consecutive === false) {
        count++;
        consecutive = true;
        match = true;
      } else if (link.head.value === G[i]) {
        consecutive = true;
        match = true;
      }

      if (i === (G.length - 1) && match === false) {
        consecutive = false;
      }
    }
    link.head = link.head.next;
    match = false;
  }
  return count;
};
const G = [3, 4];
const list = new LinkedList();
list.addNodes(3, 4);
console.log(numComponents(list, G));