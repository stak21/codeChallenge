//POA: Go through headA and put them inside a hashtable
//then go through headB and check if current is inside the hashtable
//import hashtable and linkedlist
const LinkedList = require('./myfunc.linklist');
const HashTable = require('./myfunc.hashtables');

const hashTable = new HashTable(50);

var getIntersectionNode = function (headA, headB) {
  let currentNodePTR = headA.head;
  while (currentNodePTR) {
    hashTable.addToBucket(currentNodePTR);
    currentNodePTR = currentNodePTR.next;
  }
  currentNodePTR = headB.head;
  while (currentNodePTR) {
    if (currentNodePTR === hashTable.lookUpInBucket(currentNodePTR)) {
      return currentNodePTR;
    }
    currentNodePTR = currentNodePTR.next;
  }
  return false;
};

const headA = new LinkedList();
const headB = new LinkedList();
const headC = new LinkedList();
headA.addNodes(1, 2, 3);
headB.addNodes(2, 3);
headC.addNodes(4, 5, 6);
headA.addLinkedList(headC.head);
headB.addLinkedList(headC.head);

console.log(getIntersectionNode(headA, headB));