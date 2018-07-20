

// //Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//A function where you can check if a linked list is a palindrome
//1-2-1 Yes
//1-2-2 No
//

//POA: Find the middle of the node, then rearrange the 2nd half backwards
//then compare head to the rearranged list

const LinkedList = require('./myfunc.linklist');

var reverseList = function (slowNodePTR) {
  var tempSlow = slowNodePTR;
  if (tempSlow === null) {
    return tempSlow;
  }
  var tail = tempSlow;
  let { next: following } = tempSlow;
  while (tail.next !== null) {
    tail.next = following.next;
    following.next = tempSlow;
    tempSlow = following;
    following = tail.next;
  }
  return tempSlow;
};
var isPalindrome = function (link) {
  //set variables- slow, fast and middle to link
  let slowNodePTR = link.head;
  let fastNodePTR = link.head;
  let reversedList = null;
  let moveSlow = 1;

  //initial check
  //link EQ null
  //return true;
  if (link === null) {
    return true;
  }
  //while slow !EQ null
  while (slowNodePTR !== null) {
    //if fast !EQ null
    while (fastNodePTR.next !== null) {
    //set slow to next
    //set fast to next.next
      if (moveSlow === 0) {
        slowNodePTR = slowNodePTR.next;
        moveSlow = 1;
      } else moveSlow = 0;
      fastNodePTR = fastNodePTR.next;
    }
    //else if reversedList === null create reversedList
    if (reversedList === null) {
      //then set reversedList to slow.next
      if (slowNodePTR.next !== null) {
        fastNodePTR = slowNodePTR.next;
        slowNodePTR = reverseList(slowNodePTR.next);
        reversedList = slowNodePTR;
      } else reversedList = slowNodePTR;
      //call function reverseNode(reversedList)
    }
    //if reversedList
    if (reversedList) {
      //then if link !EQ slow
      if (link.head.value !== slowNodePTR.value) {
        //return false;
        return false;
      } else {
        //else move link to next
        //      move slow to next
        link.head = link.head.next;
        slowNodePTR = slowNodePTR.next;
      }
    }
  }
  //end while
  //return true;
  return true;
};
const list = new LinkedList();
list.addNodes(1, 2, 2, 1, 2);

console.log(isPalindrome(list));
