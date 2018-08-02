/* A binary search tree is a data structure that stores items in memory. It has a very fast insertion, deletion and lookup.
It does this by utilizing the principle of binary search: by traversing through the tree from root the leaf,
making comparisons with the node and deciding if it should traverse left or right which efficiently cuts the
time by half and each look up is porportionate to the number of items in the tree
*/


const BinaryTreeNode = require('/Users/shoji/git/datastruc/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js');
// const BinarySearchTreeNode = require('/Users/shoji/git/datastruc/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js');

// class BinarySearchTreeNodes extends BinaryTreeNode {
//   constructor(value = null) {
//     super(value);
//   }

//   //insertion, remove, find, contains, find min
//   insert(value) {
//     if (this.value === null || this.value === undefined) {
//       this.value = value;

//       return this;
//     }

//     if (value < this.value) {
//       //insert to the left
//       if (this.left) {
//         return this.left.insert(value);
//       }

//       const newNode = new BinarySearchTreeNodes(value);
//       this.setLeft(newNode);

//       return newNode;
//     } else if (value > this.value) {
//       //insert to the right
//       if (this.right) {
//         return this.right.insert(value);
//       }

//       const newNode = new BinarySearchTreeNodes(value);
//       this.setRight(newNode);

//       return newNode;
//     }

//     return this;
//   }

//   find(value) {
//     //check current or root for equality
//     if (value === this.value) {
//       return this;
//     }

//     if ((value < this.value) && this.left) {
//       //recursive left
//       return this.left.find(value);
//     }

//     if ((value > this.value) && this.right) {
//       //recursive right
//       return this.right.find(value);
//     }

//     return null;
//   }

//   contains(value) {
//     return !!this.find(value);
//   }

//   remove(value) {
//     const nodeToRemove = this.find(value);

//     if (!nodeToRemove) {
//       throw new Error('Item not found in the tree');
//     }
//     //deconstruct parent from nodeToRemove
//     const { parent } = nodeToRemove;

//     if (!nodeToRemove.left && !nodeToRemove.right) { // has no children
//       if (parent) {
//         parent.removeChild(nodeToRemove);
//       } else { //no parent
//         nodeToRemove.setValue(undefined);
//       }
//     } else if (nodeToRemove.left && nodeToRemove.right) { // has two children
//       const nextBiggerNumber = nodeToRemove.right.findMin();

//       if (nextBiggerNumber !== nodeToRemove.right) {
//         this.remove(nextBiggerNumber);
//         nodeToRemove.setRight(nextBiggerNumber.value);
//       } else {
//         nodeToRemove.setValue(nodeToRemove.right.value);
//         nodeToRemove.setRight(nodeToRemove.right.right);
//       }
//     } else { // has only one child
//       const childNode = nodeToRemove.left || nodeToRemove.right;

//       if (parent) {
//         parent.replaceChild(nodeToRemove, childNode);
//       } else {
//         BinaryTreeNode.copyNode(childNode, nodeToRemove);
//       }
//     }

//     return true;
//   }

//   findMin() {
//     if (!this.left) {
//       return this;
//     }
//     return this.left.findMin();
//   }
// }

// const newNode = new BinarySearchTreeNodes(5);
// newNode.insert(6);
// newNode.insert(7);
// newNode.insert(17);
// newNode.insert(16);
// newNode.insert(150);
// newNode.remove(7);
// const newNodeTest = new BinarySearchTreeNode(5);
// newNodeTest.insert(6);
// newNodeTest.find(6);
// newNodeTest.remove(6);
// newNodeTest.remove(5);
// newNodeTest.insert(5);

class BinarySearchTreeNodes extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }
  //create a bst from scratch
  //a bst has a condition: left child is smaller, right child is bigger
  //when you insert a node, you will recursively traverse the tree until you find the smallest or biggest number
  //insertion, remove, traverse, lookup
  insert(value) {
    if (this.value === null || this.value === undefined) {
      this.value = value;

      return this;
    }
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNodes(value);
      this.setLeft(newNode);
      this.left.parent = this;

      return newNode;
    } else if (value > this.value) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNodes(value);
      this.setRight(newNode);
      this.right.parent = this;

      return newNode;
    }
    return this;
  }
  lookUp(value) {
    //when looking up a value, check if the new is empty, if it is, return the this
    //if the first node is EQ to the value then return this
    //if the value is smaller then recursively check the left side until you find the value
    //if the value is bigger then do it to the right side
    //base case will be either no child, or the node is EQ to value
    if (value === this.value) {
      return this;
    }
    if (value < this.value) {
      return this.left.lookUp(value);
    }
    if (value > this.value) {
      return this.right.lookUp(value);
    }
    return null;
  }
  remove(value) {
    const nodeToRemove = this.lookUp(value);

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
    this.left.findMin();
  }
}
const newNode = new BinarySearchTreeNodes(5);
newNode.insert(6);
newNode.insert(7);
newNode.insert(17);
newNode.insert(16);
newNode.insert(150);
newNode.lookUp(150);
newNode.insert(160);
newNode
newNode.remove(150);
