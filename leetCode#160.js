/**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */
  /**
   * @param {ListNode} headA
   * @param {ListNode} headB
   * @return {ListNode}
   */
  var getIntersectionNode = function(headA, headB) {
    //get the node that first intersects both lists
    //if the lists do not have an intersection return null
    //loop through only once with only the given lists
    //solution: if there is an intersection, then find the node with the lowest amount of nodes
    //at the same time 
    //create variables current1/2, compare1/2, count1/2, finalCount
    let currentNodePTR1 = headA;
    let currentNodePTR2 = headB;
    let count1 = 0;
    let count2 = 0;
    let finalCount = null;
    //create function modifyNode
    //resets current and equalizes the number of nodes left  in the greater node list
    function modifyNode(node, finalCount) {
      for (i = 0; i < Math.abs(finalCount); i++) {
        node = node.next;
      }
        return node;   
    }
    //while current1 and current2 !== null
    while (currentNodePTR1 !== null && currentNodePTR2 !== null ) {
      //while (finalCount EQ null)
      while (currentNodePTR1 !== null && finalCount === null || currentNodePTR2 !== null && finalCount === null) {
      //  if current1 !== null then add to count and move current to next
        if (currentNodePTR1 !== null) {
          count1 += 1;
          currentNodePTR1 = currentNodePTR1.next;
        }
      //  if current2 !== null then add to count and move current to next
        if (currentNodePTR2 !== null) {
          count2 +=1;
          currentNodePTR2 = currentNodePTR2.next;
        }
  //       // end while
      }
        //if(!finalCount) set it to count1-count2 
      if (finalCount === null) {
        finalCount = count1 - count2;
        //   if finalCount > 0 modifyNode(compare1)
          currentNodePTR1 = headA;
          currentNodePTR2 = headB;
        if (finalCount > 0) {
        currentNodePTR1 = modifyNode(currentNodePTR1, finalCount);
        }
        //    else modifyNode(compare2)
        else {
          currentNodePTR2 = modifyNode(currentNodePTR2, finalCount);
        }
      }
      // if compare 1 EQ compare 2 
      if (currentNodePTR1 === currentNodePTR2) {
        // return compare 1
        return currentNodePTR1;
      }
      //move compare 1
      currentNodePTR1 = currentNodePTR1.next;
      //move compare 2
      currentNodePTR2 = currentNodePTR2.next;
      //end while
    }
    //return null;
    return null;
  };