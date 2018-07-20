//Reverse a LinkedList iteratively and recursively
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.appendMultiples(...values);
  }

  //Prepend, Append, removing
  prepend(value) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  appendMultiples(...values) {
    values.forEach((value) => {
      this.append(value);
    });
  }

  prependMultiples(...values) {
    values.forEach((value) => {
      this.prepend(value);
    });
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  removeTail() {
    if (!this.tail) {
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;

    return this;
  }
  removeHead() {
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let tmp = this.head;
      this.head = this.head.next;
      tmp.next = null;
    }
    return this;
  }

  remove(value) {
    if (!this.head) {
      return this;
    }
    let currentNode = this.head;

    if (this.head.value === value) {
      this.removeHead();
    } else if (this.tail.value === value) {
      this.removeTail();
    } else {
      while (currentNode.next.value !== value) {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        throw new Error('This value does not exist.');
      }
      currentNode.next = currentNode.next.next;
    }

    return this;
  }
}

const LL = new LinkedList(12, 42, 23, 14, 5);

var reverseLLIteratively = (list) => {
  if (!list) {
    return null;
  }
  let currentNode = list.head;
  const newLL = new LinkedList();
  while (currentNode !== null) {
    newLL.prepend(currentNode.value);
    currentNode = currentNode.next;
  }
  return newLL;
};
var reverse = (node) => {
  var head;
  var reverseLLRecursively = (node, prev) => {
    if (!node) {
      return null;
    }
    if (node.next !== null) {
      reverseLLRecursively(node.next, node);
    }
    if (node.next === null) {
      head = node;
    }
    node.next = prev;

    return head;
  };
  reverseLLRecursively(node);
  return head;
};
reverse(LL.head);