class BinaryIndexedTree {
  constructor(arr) {
    this.update(arr);
  }

  updateIndex(index, value) {
    const old = -this.arr[index];
    const diff = old + value;
    this.arr[index] = value;
    this.addIndex(index, diff);
  }

  addIndex(index, value) {
    let idx = index + 1;
    while (idx < this.tree.length) {
      this.tree[idx] += value;
      idx = this.next(idx);
    }
  }

  sumIndex(index) {
    let sum = 0;
    if (index < 0 || index >= (this.tree.length - 1)) return sum;
    let idx = index + 1;
    while (idx !== 0) {
      sum += this.tree[idx];
      idx = this.parent(idx);
    }
    return sum;
  }

  reset() {
    this.tree.fill(0);
    for (let i = 0, n = this.arr.length; i < n; i++) {
      this.addIndex(i, this.arr[i]);
    }
  }

  update(arr) {
    this.arr = arr;
    this.tree = new Array(arr.length + 1);
    this.reset();
  }

  parent(index) {
    return index - (index & - index)
  }

  next(index) {
    return index + (index & - index)
  }
}


module.exports = BinaryIndexedTree;