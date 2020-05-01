class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }

  _test(a, b) {
    return a === b;
  }
  // __ => means dont care what it is only care about the first and second parameter
  _testIndex(search, __, i) {
    // to return if i find the correct index or not
    return search === i;
  }
  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) return null;

    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.null = this.head = null;
      }
      this.length--;
      return head.value;
    }
    const node = this._find(index - 1, this._testIndex);
    const excise = node.next;

    if (!excise) return null;

    node.next = excise.next;

    if (node.next && !node.next.next) {
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newList = new LinkedList();
newList.push(5);
newList.push(4);
newList.push(3);
newList.push(2);
newList.push(1);

console.log(newList);

console.log(newList.get(3));
