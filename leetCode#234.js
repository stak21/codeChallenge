

//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

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
var reverseList = function (slowNodePTR) {
  var tempSlow = slowNodePTR;
  if (tempSlow === null) {
    return tempSlow;
  }
  var tail = tempSlow;
  var next = tempSlow.next;
  while (tail.next !== null) {
    tail.next = next.next;
    next.next = tempSlow;
    tempSlow = next;
    next = tail.next;
  }
  return tempSlow;
};
var isPalindrome = function (head) {
  //set variables- slow, fast and middle to head
  let slowNodePTR = head;
  let fastNodePTR = head;
  let reversedList = null;
  let moveSlow = 1
  ;

  //initial check
  //head EQ null
  //return true;
  if (head === null) {
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
      //then if head !EQ slow
      if (head.val !== slowNodePTR.val) {
        //return false;
        return false;
      } else {
        //else move head to next
        //      move slow to next
        head = head.next;
        slowNodePTR = slowNodePTR.next;
      }
    }
  }
  //end while
  //return true;
  return true;
};
var head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head));
