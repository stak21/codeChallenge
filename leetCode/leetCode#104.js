
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxDepth = function (root) {
  let count = 1;
  if (!root) {
    return 0;
  }
  if (root.left || root.right) {
    count = 1;
  }
  if (root.left) {
    count += maxDepth(root.left);
  }
  if (root.right) {
    if (root.left) {
      const temp = maxDepth(root.right) + 1;
      count = temp > count ? temp : count;
    } else {
      count += maxDepth(root.right);
    }
  }
  return count;
};
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(3);
root.left.left = new TreeNode(2);
root.right.right = new TreeNode(1);
root.right.right.right = new TreeNode(0);

maxDepth(root);