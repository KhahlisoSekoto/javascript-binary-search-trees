import { Tree, prettyPrint } from './bst.js';

// Helper to generate an array of random numbers < 100
function generateRandomArray(size = 15, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Helper to print all 4 traversal orders cleanly
function printTraversals(tree) {
  const levelOrder = [];
  const preOrder = [];
  const postOrder = [];
  const inOrder = [];

  tree.levelOrderForEach((val) => levelOrder.push(val));
  tree.preOrderForEach((val) => preOrder.push(val));
  tree.postOrderForEach((val) => postOrder.push(val));
  tree.inOrderForEach((val) => inOrder.push(val));

  console.log('Level Order:', levelOrder.join(', '));
  console.log('Pre Order:  ', preOrder.join(', '));
  console.log('Post Order: ', postOrder.join(', '));
  console.log('In Order:   ', inOrder.join(', '));
}

// 1. Create a binary search tree from random numbers < 100
const randomNumbers = generateRandomArray(15, 100);
const bst = new Tree(randomNumbers);

console.log('--- Initial Balanced Tree ---');
prettyPrint(bst.root);

// 2. Confirm that the tree is balanced by calling isBalanced()
console.log('Is tree balanced?', bst.isBalanced());

// 3. Print out all elements in level, pre, post, and in order
printTraversals(bst);

// 4. Unbalance the tree by adding several numbers > 100
bst.insert(105);
bst.insert(120);
bst.insert(150);
bst.insert(200);
bst.insert(250);

console.log('\n--- After Adding Numbers > 100 ---');
prettyPrint(bst.root);

// 5. Confirm that the tree is unbalanced by calling isBalanced()
console.log('Is tree balanced?', bst.isBalanced());

// 6. Balance the tree by calling rebalance()
bst.rebalance();

console.log('\n--- After Rebalancing ---');
prettyPrint(bst.root);

// 7. Confirm that the tree is balanced by calling isBalanced()
console.log('Is tree balanced?', bst.isBalanced());

// 8. Print out all elements in level, pre, post, and in order
printTraversals(bst);