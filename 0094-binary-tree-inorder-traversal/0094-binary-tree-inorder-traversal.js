/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node) {
            traverse(node.left);  // Visit left subtree
            result.push(node.val); // Visit node itself
            traverse(node.right); // Visit right subtree
        }
    }
    
    traverse(root);
    return result;
};

// Example usage:
// Creating a binary tree:   1
//                          /   \
//                         2     3
//                        /
//                       4
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(inorderTraversal(root)); // Output: [4, 2, 1, 3]
