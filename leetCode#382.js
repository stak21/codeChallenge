let linkedlist = require('./myfunc.linklist');
let LinkedList = linkedlist.LinkedList;

let list = new LinkedList;
list.add(1,2,3,4,5,7,8,9);

// console.log(list.head);
// while(list.head !== null) {
//   console.log(list.head.val);
//   list.head = list.head.next;
// }
let length = 0;
let currentNodePTR = list.head;
let randomNum;
while (currentNodePTR !== null) {
  length++;
  currentNodePTR = currentNodePTR.next;
}
randomNum = Math.ceil(Math.random()*length);
console.log("random", randomNum);
for (let i = 0; i < randomNum; i++) {
  console.log(list.head.val);
  if(i === randomNum -1 ) {
    console.log("last Node", list.head.val);
    return list.head.val;
  }
  list.head = list.head.next;
}


