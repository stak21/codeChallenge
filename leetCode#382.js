const LinkedList = require('./myfunc.linklist');

const linkList = new LinkedList();
linkList.addNodes(1);
let lead;
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  lead = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function (head, k) {
  const reservoir = new Array(k);
  for (let i = 0, ptr = lead; ptr !== null; i++) {
    Solution.prototype.stream(i, ptr, reservoir);
    ptr = ptr.next;
  }
  return reservoir[0];
};

Solution.prototype.stream = function (n, input, reservoir) {
  if (n < reservoir.length) {
    reservoir[n] = input.val;
  } else {
    const r = Solution.prototype.randomIntInRange(0, n, true);
    if (r < reservoir.length) {
      reservoir[r] = input.val;
    }
  }
};
Solution.prototype.randomIntInRange = function (min, max, inclusive) {
  const range = (max - min) + ((inclusive) ? 1 : 0);
  return Math.trunc(Math.random() * range + min);
};
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */