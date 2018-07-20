module.exports = class Queue {
  constructor() {
    this.queueArray = [];
  }
  enqueue(value) {
    this.queueArray.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'This queue is empty.';
    }
    const removedItem = this.queueArray.shift();
    return removedItem;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.queueArray[0];
    }
  }
  isEmpty() {
    return !this.queueArray[0];
  }
};
