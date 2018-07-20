const HashTable = require('../myfunc/myfunc.hashtables');

const hash = new HashTable();

var isAnagram = (str1, str2) => {
  for (let i = 0; i < str1.length; i += 1) {
    hash.addToBucket(str1.charAt(i), true);
  }
  for (let i = 0; i < str2.length; i += 1) {
    if (hash.lookUpInBucket(str2.charAt(i)) !== true) {
      console.log('false');
      return false;
    } else {
      hash.removeFromBucket(str2.charAt(i));
    }
  }
  console.log(true);
  return true;
};

const listOfWords = ['caat', 'ccat'];

listOfWords.forEach((str) => {
  isAnagram(listOfWords[0], str);
});
