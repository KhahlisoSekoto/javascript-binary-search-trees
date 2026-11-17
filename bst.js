class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array = []) {
    this.root = this.#buildTree(array);
  }

  #buildTree(array) {
    // 1. Remove duplicates using Set and sort ascending
    const sortedUnique = [...new Set(array)].sort((a, b) => a - b);

    // 2. Recursive helper to build balanced nodes
    const buildRecursive = (arr, start, end) => {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);
      const node = new Node(arr[mid]);

      node.left = buildRecursive(arr, start, mid - 1);
      node.right = buildRecursive(arr, mid + 1, end);

      return node;
    };

    return buildRecursive(sortedUnique, 0, sortedUnique.length - 1);
  }

  includes(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.data) return true;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  insert(value) {
    const insertRec = (node, val) => {
      if (node === null) return new Node(val);
      if (val === node.data) return node;

      if (val < node.data) {
        node.left = insertRec(node.left, val);
      } else {
        node.right = insertRec(node.right, val);
      }
      return node;
    };

    this.root = insertRec(this.root, value);
  }

  deleteItem(value) {
    const deleteRec = (node, val) => {
      if (node === null) return null;

      if (val < node.data) {
        node.left = deleteRec(node.left, val);
      } else if (val > node.data) {
        node.right = deleteRec(node.right, val);
      } else {
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        let successor = node.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = deleteRec(node.right, successor.data);
      }
      return node;
    };

    this.root = deleteRec(this.root, value);
  }

  levelOrderForEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }
    if (this.root === null) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      callback(current.data);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      callback(node.data);
      traverse(node.right);
    };
    traverse(this.root);
  }

  preOrderForEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }
    const traverse = (node) => {
      if (node === null) return;
      callback(node.data);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
  }

  postOrderForEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required.');
    }
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      callback(node.data);
    };
    traverse(this.root);
  }

  #findNode(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.data) return current;
      current = value < current.data ? current.left : current.right;
    }
    return null;
  }

  #getNodeHeight(node) {
    if (node === null) return -1;
    return 1 + Math.max(this.#getNodeHeight(node.left), this.#getNodeHeight(node.right));
  }

  height(value) {
    const target = this.#findNode(value);
    if (target === null) return undefined;
    return this.#getNodeHeight(target);
  }

  depth(value) {
    let current = this.root;
    let edges = 0;

    while (current !== null) {
      if (value === current.data) return edges;
      current = value < current.data ? current.left : current.right;
      edges++;
    }
    return undefined;
  }

  isBalanced() {
    const checkBalance = (node) => {
      if (node === null) return true;

      const leftHeight = this.#getNodeHeight(node.left);
      const rightHeight = this.#getNodeHeight(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) return false;

      return checkBalance(node.left) && checkBalance(node.right);
    };

    return checkBalance(this.root);
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((data) => values.push(data));
    this.root = this.#buildTree(values);
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }
  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};

export { Tree, prettyPrint };