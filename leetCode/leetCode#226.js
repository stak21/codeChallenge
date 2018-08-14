//invert a binary tree
// if root is null return root
//do a general swap on the children
//recursive left
//recursive right

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
};
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.right = new TreeNode(2);
root.left.left = new TreeNode(1);

invertTree(root);