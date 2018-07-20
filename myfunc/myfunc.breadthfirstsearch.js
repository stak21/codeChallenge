//in a breadth first, you want to visit all the depths of a tree reading left to right
//To do that you will want to use a queue(or array) to enqueue all the nodes youre going to come back to visit
const Queue = require('./myfunc.queue');

module.exports = class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

module.exports = function breadthFirst(root) {
  //initial check
  //valid root
  //check if queue is empty
  //enqueue root
  //declare/set current to root
  //while queue !EMPTY
  //// print current
  //// if current has a left, enqueue left
  //// if current has a right, enqueue right
  // set current to (queue.dequeue)
  //
  if (!root) {
    return null;
  }
  let current = root;
  const visitedNodes = [];
  const visitingNodes = new Queue();

  if (visitingNodes.isEmpty()) {
    visitingNodes.enqueue(current);
  }
  while (!visitingNodes.isEmpty()) {
    current = visitingNodes.dequeue();
    visitedNodes.push(current.value);

    if (current.left) {
      visitingNodes.enqueue(current.left);
    }
    if (current.right) {
      visitingNodes.enqueue(current.right);
    }
  }
  return visitedNodes;
};
