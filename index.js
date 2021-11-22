class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let pos = 0;

    while (this.items[pos] < item){
      pos++;
    }
    this.items.splice(pos, 0, item)
    
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error("OutOfBounds")
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');

  }
  return this.items[0]
}

  sum() {}

  avg() {}
}

module.exports = SortedList;
