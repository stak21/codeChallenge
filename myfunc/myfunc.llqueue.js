const LinkedList = require('./myfunc.linklist');

module.exports = class QueueLL {
  constructor(...values) {
    this.linkedList = new LinkedList(...values);
  }
  enqueue(value) {
    this.linkedList.appendSingles(value);
  }
  dequeue() {
    const removeHead = this.linkedList.removeHead();
    return removeHead ? removeHead.value : null;
  }
  peek() {
    if (this.linkedList.head === null) {
      return null;
    } else {
      return this.linkedList.head.value;
    }
  }
  isEmpty() {
    return !this.linkedList.tail;
  }
};