//Given an array, 
//iterate through the array and compare item 1 and item 2
//if item 1 is > item 2 then swap
//after each iteration, the last value should be the biggest, so subtract from the iteration count
//ex: [2,1,4,6,8]
function swap(array, item1, item2) {
  let tmp = array[item1];
  array[item1] = array[item2];
  array[item2] = tmp;
  return array;
}

function bubbleSort(array) {
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length - j; i += 1) {
      const item1 = array[i];
      const item2 = array[i + 1];
      if (item1 > item2) {
        swap(array, i, i + 1);
      }
    }
  }
  return array;
}
const list = [2, 1, 5, 6, 3, 9, 7];
bubbleSort(list);