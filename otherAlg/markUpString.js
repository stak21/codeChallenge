/**
 * given a string and an input
 * modify the string according to the input
 * string = 'hello world!'
 * inputArray = [[0,2,i],[3,8,u],[9,10]]
 * Ele1 is the first character you are modifying, Ele2 is modifiyng up to that point and Ele3 is the tag you are adding
 */
/**
 * You will use a stack, a hash
 */
const Hash = require('../myfunc/myfunc.hashtables');

const opening = new Hash();
const closing = new Hash();
const s1 = [];
const s2 = [];
var p;

const createHashKeys = (input) => {
  input.forEach((item) => {
    opening.addToBucket(item[0], item[2]);
    closing.addToBucket(item[1], item[2]);
  });
};
const markUpString = (s) => {
  var final = '';

  for (let i = 0; i < s.length; i += 1) {
    //open
    if (opening.lookUpInBucket(i)) {
      final += `<${opening.lookUpInBucket(i)}>${s[i]}`;
      s1.push(opening.lookUpInBucket(i));
    } else if (closing.lookUpInBucket(i)) { //closing
      while (p !== closing.lookUpInBucket(i)) {
        p = s1.pop();
        if (p !== closing.lookUpInBucket(i)) {
          s2.push(p);
        }
        final += `</${p}>`;
      }
      while (s2.length) {
        const tmp = s2.pop();
        s1.push(tmp);
        final += `<${tmp}>`;
      }
      final += s[i];
    } else {
      final += s[i];.
    }
  }
  return final;
};
const inputArray = [[0, 2, 'i'], [4, 10, 'b'], [9, 11, 'u']];
const s = 'Hello world!';
createHashKeys(inputArray);
markUpString(s);