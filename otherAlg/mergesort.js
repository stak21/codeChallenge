//mergesort will divide and conquer an array to the last element recursively calling in the sortedArray
//base case will be 1 element in the array
//once those are met you return a merged array up the call stack
const partition = (originalArray) => {
  //base case: array contains atleast 1 element or less
  if (originalArray.length <= 1) {
    return originalArray;
  }
  //partitions array in half
  const middleElement = Math.floor(originalArray.length / 2);
  const leftArray = originalArray.slice(0, middleElement);
  const rightArray = originalArray.slice(middleElement, originalArray.length);

  //recursively partition the array in half on both arrays and storing it into a sortedArray
  const leftSortedArray = partition(leftArray);
  const rightSortedArray = partition(rightArray);

  //should contain only 1 element in left and right when first called
  return mergeSortedArray(leftSortedArray, rightSortedArray);
};
const mergeSortedArray = (leftArray, rightArray) => {
  let sortedArray = [];

  //while theres an element in both arrays
  while (leftArray.length && rightArray.length) {
    let minElement = null;

    if (leftArray[0] < rightArray[0]) { //push the smaller element to sortedArray
      minElement = leftArray.shift();
    } else {
      minElement = rightArray.shift();
    }

    sortedArray.push(minElement);
  }
  //if either arrays are empty, concatanate the remaining array to sorted array
  if (leftArray.length) {
    sortedArray = sortedArray.concat(leftArray);
  } else {
    sortedArray = sortedArray.concat(rightArray);
  }
  return sortedArray;
};

const array = [5, 3, 1, 7, 2];
partition(array);
