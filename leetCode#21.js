const LinkedList = require('./myfunc.linklist');

var mergeTwoLists = function (l1, l2) {
  var currentNodePTR = l2.head;
  var prevNodePTR;
  var compareNodePTR = l1.head;
  // add function
  //create a temp var and set it to current
  //move current to next node
  //set temp.next to compare
  //check to see if prevPTR exists
  //if it does
  //set prev.next to temp
  // else then set l1 to temp
  function addNode() {
    var tempNodePTR = currentNodePTR;
    currentNodePTR = currentNodePTR.next;
    tempNodePTR.next = compareNodePTR;
    //if prevNodePTR exists
    if (prevNodePTR) {
      prevNodePTR.next = tempNodePTR;
    } else {
      l1.head = tempNodePTR;
    }
  }
  //initial check
  if (l1 === null && l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2.head;
  }
  if (l2 === null) {
    return l1.head;
  }
  //while compare and current != null
  while (compareNodePTR !== null && currentNodePTR !== null) {
    //reinitialize compareNodePTR
    compareNodePTR = l1.head;
    // while l2 > l1
    while (currentNodePTR.value > compareNodePTR.value) {
    // check to see if compare.next is null
      if (compareNodePTR.next === null) {
        //if it is set compare.next to current and then set compare to null
        compareNodePTR.next = currentNodePTR;
        compareNodePTR = null;
        break;
      } else {
      // set prevPTR to compare
        prevNodePTR = compareNodePTR;
        //move comparePTR to next
        compareNodePTR = compareNodePTR.next;
      }
    }
    //outside of while
    //call addNode
    //only if compare does not equal null
    if (compareNodePTR !== null) {
      addNode();
    }
  }
  return l1.head;
};
var l1 = new LinkedList();
l1.addNodes(1, 4, 6, 7);
var l2 = new LinkedList();
l2.addNodes(2, 3, 8, 9);


var results = mergeTwoLists(l1, l2);
l1.logList();
console.log(results);