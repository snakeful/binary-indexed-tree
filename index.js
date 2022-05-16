const BinaryIndexedTree = require('./src/binary-indexed-tree');

const arr = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];
const tree = new BinaryIndexedTree(arr);
tree.updateIndex(3, 9);
tree.updateIndex(4, 6);
