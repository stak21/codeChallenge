/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//when you come back, the current problem is [1,1,1] 1 You can't read val of null because you are skipping all of thme.
var removeElements = function(head, val) {
  var currentNodePTR = head
removeNode = () => {
     console.log(currentNodePTR.val);
  var prevNodePTR = currentNodePTR;
    currentNodePTR = currentNodePTR.next;
    if(currentNodePTR === null) {
        prevNodePTR.next = currentNodePTR;
        return head;
    }
    prevNodePTR.next = currentNodePTR.next;
    console.log(currentNodePTR.val);
}
// nodeValue = () => {
//     while(currentNodePTR !== null) {
//         console.log(currentNodePTR.val);
//         currentNodePTR = currentNodePTR.next;
//     }
// }
//iterate though head until null
  if(currentNodePTR === null) {
      return head;
  }
  if(currentNodePTR.next === null) {
    return head;
}
while(currentNodePTR !== null ) {
    if(currentNodePTR.val === val) {  //checks if head is EQ to val
      head = currentNodePTR.next;
    }
  if(currentNodePTR.next.val === val) { // if compared values are equal then remove the element
console.log("test");
    removeNode();
  }
  //check to see if current is set to null
  if(currentNodePTR === null) {
    return head;
  }
  currentNodePTR = currentNodePTR.next;
}
  return head;
};