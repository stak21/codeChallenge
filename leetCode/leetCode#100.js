function binaryTreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
var isSameTree = function(p, q, root) {
  if (p.val === undefined && q.val === undefined) {
    return true;
  }
  if (p.val === undefined || q.val === undefined) {
    return false;
  }// if the root does not have children skip
  if (!root) {
    root = p.val;
  }
  if (p.left && q.left && p.right && q.right) {
    if (p.left && q.left || p.left === q.left) {
      if (p.left.val === q.left.val) {
        isSameTree(p.left, q.left, root);
      }
    } else {
      return false;
    }
    if (p.right && q.right) {
      if (p.right.val === q.right.val) {
        isSameTree(p.right, q.right, root);
      }
    } else {
      return false;
    }
}
  if (p.val === root && q.val === root) {
    return true;
  } else {
    return false;
  }
};

const root = new binaryTreeNode(1);
const root2 = new binaryTreeNode(1);
root.left = new binaryTreeNode(1);
root.right = new binaryTreeNode(1);
root2.left = new binaryTreeNode(1);
// root2.right = new binaryTreeNode(1);

console.log(isSameTree(root, root2));