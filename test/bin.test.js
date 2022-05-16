const BinaryIndexedTree = require('../src/binary-indexed-tree');

describe('binary indexed tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinaryIndexedTree([3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3]);
  });

  it('sum numbers from index', () => {
    // [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3]
    expect(tree.sumIndex(-10)).toBe(0);
    expect(tree.sumIndex(-1)).toBe(0);
    expect(tree.sumIndex(0)).toBe(3);
    expect(tree.sumIndex(1)).toBe(5);
    expect(tree.sumIndex(2)).toBe(4);
    expect(tree.sumIndex(3)).toBe(10);
    expect(tree.sumIndex(4)).toBe(15);
    expect(tree.sumIndex(5)).toBe(19);
    expect(tree.sumIndex(6)).toBe(16);
    expect(tree.sumIndex(7)).toBe(19);
    expect(tree.sumIndex(8)).toBe(26);
    expect(tree.sumIndex(9)).toBe(28);
    expect(tree.sumIndex(10)).toBe(31);
  });

  it('sum numbers from index updating indexes', () => {
    // [3, 2, -1, 9, 6, 4, -3, 3, 7, 2, 3]
    expect(tree.sumIndex(0)).toBe(3);
    expect(tree.sumIndex(1)).toBe(5);
    expect(tree.sumIndex(2)).toBe(4);
    expect(tree.sumIndex(3)).toBe(10);
    tree.updateIndex(3, 9);
    expect(tree.sumIndex(3)).toBe(13);
    expect(tree.sumIndex(4)).toBe(18);
    tree.updateIndex(4, 6);
    expect(tree.sumIndex(4)).toBe(19);
    expect(tree.sumIndex(5)).toBe(23);
    expect(tree.sumIndex(6)).toBe(20);
    expect(tree.sumIndex(7)).toBe(23);
    expect(tree.sumIndex(8)).toBe(30);
    expect(tree.sumIndex(9)).toBe(32);
    expect(tree.sumIndex(10)).toBe(35);
    expect(tree.sumIndex(11)).toBe(0);
  });
});
