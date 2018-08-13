const keyBoard = (array) => {
const key = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,

    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,

    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
  };

  //get input
  //split first element
  // return //set row to first elements characte key value
    //for each check if key[element] !== row
      //(!) set isSameRow to false
    //if isSameRow is true then return element
  return array.filter((item) => {
    let isSameRow = true;
    const items = item.split('');
    const row = key[items[0].toLowerCase()];
    for (let i = 0; i < items.length; i += 1) {
       const element = items[i].toLowerCase();
      if (key[element] !== row) {
        isSameRow = false;
      }
    }
    if (isSameRow === true) {
      return item;
    }
  });
};
const array = [];
console.log(keyBoard(array));