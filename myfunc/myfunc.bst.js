/* A binary search tree is a data structure that stores items in memory. It has a very fast insertion, deletion and lookup.
It does this by utilizing the principle of binary search: by traversing through the tree from root the leaf,
making comparisons with the node and deciding if it should traverse left or right which efficiently cuts the
time by half and each look up is porportionate to the number of items in the tree
*/


const BinaryTreeNode = require('/Users/shoji/git/datastruc/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js');
const BinarySearchTreeNode = require('/Users/shoji/git/datastruc/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js');

class BinarySearchTreeNodes extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }

  //insertion, remove, find, contains, find min
  insert(value) {
    if (this.value === null || this.value === undefined) {
      this.value = value;

      return this;
    }

    if (value < this.value) {
      //insert to the left
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNodes(value);
      this.setLeft(newNode);

      return newNode;
    } else if (value > this.value) {
      //insert to the right
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNodes(value);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }

  find(value) {
    //check current or root for equality
    if (value === this.value) {
      return this;
    }

    if ((value < this.value) && this.left) {
      //recursive left
      return this.left.find(value);
    }

    if ((value > this.value) && this.right) {
      //recursive right
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('Item not found in the tree');
    }
    //deconstruct parent from nodeToRemove
    const { parent } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) { // has no children
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else { //no parent
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) { // has two children
      const nextBiggerNumber = nodeToRemove.right.findMin();

      if (nextBiggerNumber !== nodeToRemove.right) {
        this.remove(nextBiggerNumber);
        nodeToRemove.setRight(nextBiggerNumber.value);
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else { // has only one child
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    return true;
  }

  findMin() {
    if (!this.left) {
      return this;
    }
    return this.left.findMin();
  }
}

const newNode = new BinarySearchTreeNodes(5);
newNode.insert(6);
newNode.insert(7);
newNode.insert(17);
newNode.insert(16);
newNode.insert(150);
newNode.remove(7);
const newNodeTest = new BinarySearchTreeNode(5);
newNodeTest.insert(6);
newNodeTest.find(6);
newNodeTest.remove(6);
newNodeTest.remove(5);
newNodeTest.insert(5);

const newNode2 = new BinarySearchTreeNode(5);
newNode2.insert(6);
newNode2.insert(7);
newNode2.insert(17);
newNode2.insert(16);
newNode2.insert(150);
newNode2.find(150);
newNode2.insert(160);
newNode2.insert(140);
newNode2.insert(155);
newNode2.remove(150);
