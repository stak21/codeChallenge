function binarySearch(array, k, start, end) {
  //get midpoint
  var midpoint = parseInt((start + end) / 2, 10);

  // k is Equal to array[x]
  if (k === array[midpoint]) {
    return midpoint;
    //k is smaller than array[x]
  }

  if (start === end) {
    return -1;
  }

  if (k < array[midpoint]) {
    end = midpoint - 1;
    return binarySearch(array, k, start, end);
    //k is greater than array[x]
  } else if (k > array[midpoint]) {
    start = midpoint + 1;
    return binarySearch(array, k, start, end);
    //k is not found
  }
  return 0;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];
let result = binarySearch(array, 1, 0, array.length - 1);
console.log(result === 0);

result = binarySearch(array, 8, 0, array.length - 1);
console.log(result === 7);

result = binarySearch(array, 4, 0, array.length - 1);
console.log(result === 3);

result = binarySearch(array, 10, 0, array.length - 1);
console.log(result === -1);


array = [1, 2, 3, 4, 5, 6, 7];
result = binarySearch(array, 1, 0, array.length - 1);
console.log(result === 0);

result = binarySearch(array, 7, 0, array.length - 1);
console.log(result === 6);

result = binarySearch(array, 4, 0, array.length - 1);
console.log(result === 3);

result = binarySearch(array, 10, 0, array.length - 1);
console.log(result === -1);