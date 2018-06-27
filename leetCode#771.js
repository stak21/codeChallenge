const HashTable = require('./myfunc.hashtables');

const J = 'aS';
const S = 'aaSSSfds';
var numJewelsInStones = function (jewel, stone) {
  //create a hashtable and insert J
  //go through each letter in S and search for the letter in the hash
  //if available, then increment count, else move on
  const hash = new HashTable();
  let count = 0;
  for (let i = 0; i < jewel.length; i += 1) {
    hash.addToBucket(jewel.charAt(i), jewel.charAt(i));
  }
  for (let k = 0; k < stone.length; k += 1) {
    if (hash.lookUpInBucket(stone.charAt(k))) {
      count += 1;
    }
  }
  return count;
};

numJewelsInStones(J, S);