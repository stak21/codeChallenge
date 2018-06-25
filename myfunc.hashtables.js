//create a hash class
//constructor
//function index for hash
//adding an element to an hash bucket
//removing an element from a hash bucket
//searching for an element from a hash bucket
// const LinkedList = require('./myfunc.linklist');

module.exports = class HashTable {
  constructor(limit) {
    this.storage = [];
    this.limit = limit || 50;
    this.count = 0;
  }
  makeHash(str) {
    let hash = 0;
    const { limit } = this;
    for (var i = 0; i < str.length; i += 1) {
      hash += str.charCodeAt(i);
    }
    return hash % limit;
  }
  addToBucket(key, value) {
    var { storage } = this;
    const index = this.makeHash(key);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i += 1) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }
  removeFromBucket(key) {
    var { storage } = this;
    const index = this.makeHash(key);
    if (storage[index] === undefined) {
      return console.error(`The key '${key}' was not found`);
    } else if (storage[index].length === 1 && storage[index][0][0] === key) {
      storage[index].splice(0, 1);
    } else {
      var found = false;
      for (let i = 0; i < storage[index].length; i += 1) {
        if (storage[index][i][0] === key) {
          storage[index].splice(i, 1);
          found = true;
        }
      }
      if (found === false) {
        return console.error(`The key '${key}' was not found`);
      }
    }
    return this;
  }
  lookUpInBucket(key) {
    var { storage } = this;
    const index = this.makeHash(key);
    if (storage[index] === undefined) {
      return console.error(`The key '${key}' was not found`);
    } else if (storage[index].length === 1 && storage[index][0][0] === key) {
      return storage[index][0][1];
    } else {
      var found = false;
      for (let i = 0; i < storage[index].length; i += 1) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
      if (found === false) {
        return console.error(`The key '${key}' was not found`);
      }
    }
    return this;
  }
};