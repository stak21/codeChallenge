const BinaryNode = require('/Users/shoji/git/datastruc/javascript-algorithms/src/data-structures/tree/BinaryTreeNode');

const binaryTree1 = new BinaryNode(3);
const node1 = new BinaryNode(4);
const node2 = new BinaryNode(5);
const node5 = new BinaryNode(1);
const node8 = new BinaryNode(2);
binaryTree1.setLeft(node1);
binaryTree1.setRight(node2);
binaryTree1.left.setLeft(node5);
binaryTree1.right.setLeft(node8);
const binaryTree2 = new BinaryNode(3);
const node3 = new BinaryNode(1);
const node4 = new BinaryNode(2);
// const node6 = new BinaryNode(1);
// const node7 = new BinaryNode(7);
binaryTree2.setLeft(node3);
binaryTree2.setRight(node4);
// binaryTree2.left.setLeft(node6);
// binaryTree2.right.setRight(node7);

const binarytree = new BinaryNode();

const merge = (tree1, tree2, newTree) => {
  if (!tree1 && tree2) {
    return;
  }
  const newNode = new BinaryNode();
  newNode.value = (tree1.value + tree2.value);

  if (!newTree) {
    newTree = newNode;
  }
  if (!tree1.left && !newTree.left || !tree2.left && !newTree.left) {
    const NodeToAdd = (tree1.left) ? tree1.left : tree2.left;
    newNode.left = NodeToAdd;
  }
  if (!tree1.right && !newTree.right || !tree2.right && !newTree.right) {
    const NodeToAdd = (tree1.right) ? tree1.right : tree2.right;
    newNode.right = NodeToAdd;
  }
  //recursion
  if (tree1.left && tree2.left && !newTree.left) {
    newNode.left = (merge(tree1.left, tree2.left, newTree.left));
  }
  if (tree1.right && tree2.right && !newTree.right) {
    newNode.right = (merge(tree1.right, tree2.right, newTree.right));
  }
  return newNode;
};
merge(binaryTree1, binaryTree2);