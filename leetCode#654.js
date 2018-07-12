//binary max tree
//from a given array, create a max binary tree with the root as the max number
//from the max number index divide the array into a left tree with the subset of the arrayset on the left side of the root. And the right as the right
// each branch must be decsending frmo max to least

//POA: use a queue and iterate through the array looking for the max number. Compare the root with the new number and if its bigger, make that the root.
//dequeue the remaining numbers into a LinkedList and sort.
// Once iterated through the array, dequeue the queue starting with the root and append the right branch and sort the remaning numbers in the queue until the queue is empty
//append the left branch of the root with the other list you created.

//create a linked list suitable for a queue
//create a queue
//use the queue to execute the POA

//Linked list implementation
//create a constructor, Append, prepend, Remove, search, removeHead, removeTail
////
//linkedlist unnecessary
// class LinkedListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   toString(callback) {
//     return callback ? callback(this.value) : `${this.value}`;
//   }
// }
// class LinkedList {
//   constructor(...values) {
//     this.head = null;
//     this.tail = null;
//     this.append(...values);
//   }

//   append(...val) {
//     val.forEach(value =>
//       this.appendSingles(value));
//     return this;
//   }
//   appendSingles(value) {
//     const newNode = new LinkedListNode(value);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;

//       return this;
//     }

//     this.tail.next = newNode;
//     this.tail = newNode;

//     return this;
//   }
//   prepend(value) {
//     //set newNode.next to head, set this.head to newNode and if there is no tail, then set it to newNode
//     const newNode = new LinkedListNode(value, this.head);
//     this.head = newNode;
//     if (this.tail === null) {
//       this.tail = newNode;
//     }

//     return this;
//   }
//   remove(value) {
//   //iterate through the LinkedList looking for the value, once found, set currentNode.next to currentNode.next.next
//   // check if tail was deleted ? set tail to currentNode : nothing
//     if (this.head === null) {
//       return null;
//     }

//     let deletedNode = null;

//     // while the head EQ the value then set head to next value
//     while (this.head && this.head.value === value) {
//       deletedNode = this.head;
//       this.head = this.head.next;
//     }

//     let currentNode = this.head;

//     //if currentNode exists, iterate through the LL and remove any node EQ value
//     if (currentNode !== null) {
//       while (currentNode.next !== null) {
//         if (currentNode.next.value === value) {
//           deletedNode = currentNode.next;
//           currentNode.next = currentNode.next.next;
//         } else {
//           currentNode = currentNode.next;
//         }
//       }
//     }

//     // check if tail was removed
//     if (this.tail.value === value) {
//       this.tail = currentNode;
//     }
//     return deletedNode;
//   }
//   search(value) {
//     if (this.head === null) {
//       return null;
//     }

//     let currentNode = this.head;

//     while (currentNode !== null) {
//       if (currentNode.value === value) {
//         return currentNode;
//       }
//       currentNode = currentNode.next;
//     }
//     return null;
//   }
//   removeHead() {
//     if (this.head === null) {
//       return null;
//     }

//     const deletedNode = this.head;

//     if (this.head.next !== null) {
//       this.head = this.head.next;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return deletedNode;
//   }
//   removeTail() {
//     //check if there is only one node in the list ? set head & tail to null and return deletedTail
//     // go to the node before the tail and set its next to null and set tail to current & return deletedtail

//     if (this.head === this.tail) {
//       const deletedTail = this.tail;
//       this.head = null;
//       this.tail = null;

//       return deletedTail;
//     }

//     const deletedTail = this.tail;

//     // Rewind to the last node and delete "next" link for the node before the last one.
//     let currentNode = this.head;
//     while (currentNode.next) {
//       if (!currentNode.next.next) {
//         currentNode.next = null;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//     this.tail = currentNode;
//     return deletedTail;
//   }
// }
// Queue implementation
//create a enqueue, dequeue, peek, isempty
class Queue {
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
}

//implement a tree
class BinaryTreeNode {
  constructor(value = null) {
    this.parent = null;
    this.left = null;
    this.right = null;
    this.value = value;

    //can also include a meta using a hash
  }

  //getter methods height, leftheight, rightheight, balancefactor, uncle

  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.rightHeight, this.leftHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    //check if there is a parent
    if (!this.parent) {
      return undefined;
    }
    //check if there are grandparents
    if (!this.parent.parent) {
      return undefined;
    }
    //check if the grandparent has two children
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }
    //check which child is the uncle
    if (this.parent === this.parent.parent.left) {
      return this.parent.parent.right;
    } else return this.parent.parent.left;
  }
  //setter methods value, left, right
  setValue(value) {
    this.value = value;
    return this;
  }
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }

  //methods remove child, replace child, copyNode ,traverse
  removeChild(nodeToRemove) {
    if (this.left && this.left === nodeToRemove) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToRemove, replacementChild) {
    //similar to removeChild, but instead of setting it to null, you are just replacing it
    if (!nodeToRemove || !replacementChild) {
      return false;
    }

    if (this.left && this.left === nodeToRemove) {
      this.left = replacementChild;
      return true;
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = replacementChild;
      return true;
    }

    return false;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setvalue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  traverseInOrder() {
    //create a traverse array
    //traverse through the left, until there isnt a left
    //traverse through the right, unti lthere isnt a right

    let traverse = [];

    if (this.left) {
      //you are concatanating the traverse array to the current traverse.
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    //its very important to keep a check here to push into traverse
    traverse.push(this.value);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}


//iterate through the array
//enqueue the element
//if element is > root
//then dequeue everything up to that point
const root = new BinaryTreeNode(1);
const right = new BinaryTreeNode(2);
const rightx2 = new BinaryTreeNode(3);
const left = new BinaryTreeNode(4);
const leftx2 = new BinaryTreeNode(5);
const leftChild = new BinaryTreeNode('left\'s left');
const leftChildx2 = new BinaryTreeNode('left\'s left\'s left');


//binary max tree
//from a given array, create a max binary tree with the root as the max number
//from the max number index divide the array into a left tree with the subset of the arrayset on the left side of the root. And the right as the right
// each branch must be decsending frmo max to least

//POA: use a queue and iterate through the array looking for the max number. Compare the root with the new number and if its bigger, make that the root.
//dequeue the remaining numbers into a LinkedList and sort.
// Once iterated through the array, dequeue the queue starting with the root and append the right branch and sort the remaning numbers in the queue until the queue is empty
//append the left branch of the root with the other list you created.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    //iterate through 
};