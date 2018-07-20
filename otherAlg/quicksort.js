//quickSort is a efficient sorting technique that uses divide and conquer
//the idea is: you get a centerpivot element and compare the rest of the array elements to that pivot
//you end up with a leftArray center array and rightarray
//you recursively repeat the same steps above on the left array, then the right
//afterwards you merge the arrays from left to center to right

const quickSort = (originalArray) => {
  //duplicate the originalArray
  const array = [...originalArray];

  if (array.length <= 1) {
    return array;
  }
  //init left, center, right array, and pivot
  const pivot = array.shift();
  const centerArray = [pivot];
  const leftArray = [];
  const rightArray = [];

  while (array.length > 0) {
    const currentElement = array.shift();

    if (currentElement === pivot) {
      centerArray.push(currentElement);
    } else if (currentElement < pivot) {
      leftArray.push(currentElement);
    } else { //currentElement is greater
      rightArray.push(currentElement);
    }
  }
  //once all elements are in a subset, sort the subsets
  const leftSortedArray = quickSort(leftArray);
  const rightSortedArray = quickSort(rightArray);

  return leftSortedArray.concat(centerArray, rightSortedArray);
};

const array = [2, 6, 3, 5, 1];
quickSort(array);