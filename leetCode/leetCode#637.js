//Average of levels in a binary tree

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const newTree = new TreeNode(1);
newTree.left = new TreeNode(2);
newTree.right = new TreeNode(3);
newTree.left.left = new TreeNode(4);

  const enqueueChild = (node) => {
  const childQ = [];
  if (node) {
    if (node.left) {
      childQ.push(node.left);
    }
    if (node.right) {
      childQ.push(node.right);
    }
    return childQ;
  };
}

const averageOfLevels = (root) => {
  let Q = [];
  let childQ = [];
  const final = [root.val];
  Q = enqueueChild(root);
  while (Q.length > 0) {
    let average = 0;
    for (let i = 0; i < Q.length; i += 1) {
      average += Q[i].val;
      childQ = childQ.concat(enqueueChild(Q[i]));
    }
    average /= Q.length;
    final.push(average);
    Q = childQ.splice(0);
  }
  return final;
};

console.log(averageOfLevels(newTree));
