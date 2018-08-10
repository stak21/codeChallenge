
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};
//case 0; both trees null
//case 1; one tree null
//case 2; both tree only root
//case 3: 1 tree one child
//case 4; both trees 1 child
//case 5: both trees both child
//case 6: case 5 but one tree one extra child

 const root1 = new TreeNode(1);
 const root2 = new TreeNode(1);
root1.left  = new TreeNode(2);

 /*
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1 = undefined, root2 = undefined) {
  const left1 = root1.left;
  const left2 = root2.left;
  const right1 = root1.right;
  const right2 = root2.right;

  if (left1 && left2) {
    leafSimilar(left1, left2);
  }
  else if (!left1 && !left2) {
    if (root1.val !== root2.val) {
      return false;
    }
  } else {
    
    const left = (left1 === null) ? left2 : left1;
    leafSimilar(left);
  }
  return true;
};

leafSimilar(root1, root2);