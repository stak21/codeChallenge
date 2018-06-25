//
// to use:
// const LinkedList = require('./myfunc.linklist');
// to add:
// node.addNodes(1, { key: 'dog', value: 'shiba' });
//
module.exports = class LinkedList {
  constructor(value) {
    if (value) {
      console.log('This only creates the list, try adding nodes separately with .addNodes');
    }
    this.head = null;
    this.count = 0;
    this.length = 0;
  }
  _singleAddNode(obj) {
    let newNode = { };
    if (obj.key && obj.value) {
      newNode = { key: obj.key, value: obj.value };
    } else {
      newNode = { value: obj };
    }
    newNode.next = null;
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }
  //when using addNodes, either add a value or an obj(key:value) ex: 5 or { key: key, value: value}
  addNodes(...obj) {
    obj.forEach(value => this._singleAddNode(value));
    return this;
  }
  addLinkedList(obj) {
    if (this.head === null) {
      this.head = obj;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = obj;
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