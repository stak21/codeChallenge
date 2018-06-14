
let head;
let node;
let length_;
let currentNodePTR_;
function LinkedList() {
  this.next = null;
  this.head = null;
  this.singleAdd = function (val) {
    if (this.val === undefined) {
    this.val = val;
    this.next = null;
    this.head = this;
    } else {
      const node = {val};
      currentNodePTR_ = this.head;
      while (currentNodePTR_.next !== null) {
        currentNodePTR_ = currentNodePTR_.next;
      }
      currentNodePTR_.next = node;
      node.next = null;
    }
      length_++;
  }
  this.add = function (...values) {
    values.forEach( val => {
       this.singleAdd(val);
      });
      return this;
  }
  this.logList = function (head) {
    while(head != null) {
      console.log(head.val);
      head = head.next;
    }
    return 0;
  }
}

module.exports = {
  LinkedList: LinkedList
}
