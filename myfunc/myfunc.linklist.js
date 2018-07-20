//
// to use:
// const LinkedList = require('./myfunc.linklist');
// to add:
// node.addNodes(1, { key: 'dog', value: 'shiba' });
//
const LinkedListNode = require('./myfunc.linkedlistnode');

module.exports = class LinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.append(...values);
  }

  append(...val) {
    val.forEach(value =>
      this.appendSingles(value));
    return this;
  }
  appendSingles(value) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
  prepend(value) {
    //set newNode.next to head, set this.head to newNode and if there is no tail, then set it to newNode
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }

    return this;
  }
  remove(value) {
  //iterate through the LinkedList looking for the value, once found, set currentNode.next to currentNode.next.next
  // check if tail was deleted ? set tail to currentNode : nothing
    if (this.head === null) {
      return null;
    }

    let deletedNode = null;

    // while the head EQ the value then set head to next value
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    //if currentNode exists, iterate through the LL and remove any node EQ value
    if (currentNode !== null) {
      while (currentNode.next !== null) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // check if tail was removed
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  search(value) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  removeHead() {
    if (this.head === null) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head.next !== null) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedNode;
  }
  removeTail() {
    //check if there is only one node in the list ? set head & tail to null and return deletedTail
    // go to the node before the tail and set its next to null and set tail to current & return deletedtail

    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    const deletedTail = this.tail;

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }
  //Adding another linked list to the tail
  addLinkedList(obj) {
    if (this.head === null) {
      this.head = obj;
    } else {
      this.tail.next = obj;
    }
  }
  logList() {
    let { head } = this;
    while (head != null) {
      if (head.key && head.value) {
        console.log(`${head.key}: ${head.value}`);
      } else {
        console.log(head.value);
      }
      head = head.next;
    }
    return 0;
  }
};