const LinkedListNode = require('../myfunc/myfunc.linkedlistnode');

const node = new LinkedListNode(1);
node.next = new LinkedListNode(2);
node.next.next = new LinkedListNode(3);

var reverseLL = (node) => {
  let current = node;
  let n = node;
  let prev = null;

  while (current !== null) {
    n = n.next;
    current.next = prev;
    prev = current;
    current = n;
  }
  return prev;
};

reverseLL(node);