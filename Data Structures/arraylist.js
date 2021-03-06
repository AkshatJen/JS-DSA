class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const ans = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return ans;

    /*
or could be done using the delete too
return this.delete(this.length-1);
     */
  }
  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new ArrayList();

arr.push(5);
arr.push(1);
console.log(arr);
