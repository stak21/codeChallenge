//Reversing a linked list
//1->2->3->4->5->null
//5->4->3->2->1->null
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
     if(head === null) {
         return head;
     }
     var tail = head;
     var next = head.next;
     while(tail.next !== null) {
       tail.next = next.next;
       next.next = head;
       head = next;
       next = tail.next;
     }
     return head;
 };
 