// class MinHeap {
//   constructor() {
//     this.container = [];
//   }
//   //
//   // getter methods
//   // get the parent, both child index
//   // get the parent, both child values
//   // validate parent, both child
//   //
//   //For future reference- You might be confused on how to get the index, but look at customindex when you heapify
//   getParentIndex(childIndex) {
//     return Math.floor((childIndex - 1) / 2);
//   }
//   getLeftChildIndex(parentIndex) {
//     return (parentIndex * 2) + 1;
//   }
//   getRightChildIndex(parentIndex) {
//     return (parentIndex * 2) + 2;
//   }
//   getParent(childIndex) {
//     return this.container[this.getParentIndex(childIndex)];
//   }
//   getLeftChild(parentIndex) {
//     return this.container[this.getLeftChildIndex(parentIndex)];
//   }
//   getRightChild(parentIndex) {
//     return this.container[this.getRightChildIndex(parentIndex)];
//   }
//   hasParent(childIndex) {
//     return this.getParentIndex(childIndex) >= 0;
//   }
//   hasLeftChild(parentIndex) {
//     return this.getLeftChildIndex(parentIndex) < this.container.length;
//   }
//   hasRightChild(parentIndex) {
//     return this.getRightChildIndex(parentIndex) < this.container.length;
//   }
//   //
//   // Add, remove, find, poll, swap, peek, heapifyup & down
//   //
//   peek() {
//     return this.container[0];
//   }
//   swap(itemIndex1, itemIndex2) {
//     const tmp = this.container[itemIndex2];
//     this.container[itemIndex2] = this.container[itemIndex1];
//     this.container[itemIndex1] = tmp;
//   }
//   poll() {
//     //want to get the root, replace it with the last element and heapify down
//     const item = this.container[0];
//     this.container[0] = this.container.pop();
//     this.heapifydown();
//     return item;
//   }
//   add(item) {
//     // add to C and heapify
//     this.container.push(item);
//     this.heapifyUp();
//     return this;
//   }
//   remove(item) {
//     // when removing, find the number of item in container to remove
//     //iterate for that number and for each time get the index to remove
//     // in the vacant index, pop the last element in there
//     // get the parentvalue and child value if it exists
//     // if the parentvalue is > than the new item, heapify up
//     // if the parentvalue is < and the child exists, then heapify down
//     const numberOfItem = this.find(item).length;

//     for (let itemIndex = 0; itemIndex < numberOfItem; itemIndex += 1) {
//       const indexToRemove = this.find(item).pop();
//       if (indexToRemove === (this.container.length - 1)) {
//         this.container.pop();
//       } else {
//         this.container[indexToRemove] = this.container.pop();

//         // Get parent and child
//         const parent = this.getParent(indexToRemove);
//         const leftChild = this.getLeftChild(indexToRemove);

//         // If there is a left Child and node is greater than parent and leftchild, otherwise heapify up.
//         if (
//           leftChild !== null &&
//           (
//             parent === null ||
//             parent < this.container[indexToRemove]
//           )
//         ) {
//           this.heapifyDown(indexToRemove);
//         } else {
//           this.heapifyUp(indexToRemove);
//         }
//       }
//     }

//     return this;
//   }

//   find(item) {
//     // iterate through the C and if any of the items in C is EQ to item, store that index in an array
//     const numberOfItem = [];

//     for (let itemIndex = 0; itemIndex < this.container.length; itemIndex += 1) {
//       if (this.container[itemIndex] === item) {
//         numberOfItem.push(itemIndex);
//       }
//     }

//     return numberOfItem;
//   }

//   heapifyUp(customIndexStart) {
//     //custom index or the last element in the array
//     let currentIndex = customIndexStart || (this.container.length - 1);

//     // compare currentindex with the parent, if < ? swap : break
//     while (
//       this.hasParent(currentIndex) &&
//       this.container[currentIndex] < this.getParent(currentIndex)
//     ) {
//       this.swap(this.getParentIndex(currentIndex), currentIndex);
//       currentIndex = this.getParentIndex(currentIndex);
//     }
//   }

//   heapifyDown(customIndexStart) {
//     //custom index or the last element in the array
//     let currentIndex = customIndexStart || this.container[this.container.length - 1];
//     let nextIndex = null;

//     //while leftchild exists
//     //if rightChild exists
//     //set nextIndex to whicever child is smaller index
//     //if this value is < the nextindex value ? stop
//     //swap and set current index to next index

//     while (this.hasLeftChild(currentIndex)) {
//       if (
//         this.hasRightChild(currentIndex) &&
//         this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)
//       ) {
//         nextIndex = this.getRightChildIndex(currentIndex);
//       } else {
//         nextIndex = this.getLeftChild(currentIndex);
//       }

//       if (this.container[currentIndex] < this.container[nextIndex]) {
//         break;
//       }

//       this.swap(currentIndex, nextIndex);
//       currentIndex = nextIndex;
//     }
//   }

//   isEmpty() {
//     return !this.container.length;
//   }

//   toString() {
//     return this.container.toString();
//   }
// }

// const heap = new MinHeap();
// heap.add(1);
// heap.add(2);
// heap.add(3);
// heap.add(1);
// heap.add(0);
// console.log(heap.container);


class minHeap {
  constructor() {
    this.container = [];
  }
  //getter
  //setter
  //heapify

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  getLeftChildIndex(parentIndex) {
    return (parentIndex * 2) + 1;
  }
  getRightChildIndex(parentIndex) {
    return (parentIndex * 2) + 2;
  }
  getParent(childIndex) {
    return this.container[this.getParentIndex(childIndex)];
  }
  getLeftChild(parentIndex) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }
  getRightChild(parentIndex) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.container.length;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.container.length;
  }
  //
  // Add, remove, find, poll, swap, peek, heapifyup & down
  //
  peek() {
    return this.container[0];
  }
  swap(index1, index2) {
    const tmp = this.container[index1];
    this.container[index1] = this.container[index2];
    this.container[index2] = tmp;

    return this;
  }
  add(item) {
    this.container.push(item);
    this.heapifyUp();
    return this;
  }
  find(item) {
  //iterate through C and count each item in an array
    const numberOfItem = [];
    for (let itemIndex = 0; itemIndex < this.container.length; itemIndex += 1) {
      if (item === this.container[itemIndex]) {
        numberOfItem.push(itemIndex);
      }
    }
    return numberOfItem;
  }
  heapifyUp(customIndexStart) {
    let currentIndex = customIndexStart || (this.container.length - 1);

    while (
      this.hasParent(currentIndex) &&
      this.container[currentIndex] < this.getParent(currentIndex)
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  heapifyDown(customIndexStart) {
    let currentIndex = customIndexStart || 0;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      if (this.container[currentIndex] < this.container[nextIndex]) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
    return this;
  }
  remove(item) {
    const numberOfItem = this.find(item).length;

    for (let itemIndex = 0; itemIndex < numberOfItem; itemIndex += 1) {
      const indexToRemove = this.find(item).pop();
      //checking if last element is the index to remove
      if (this.container[indexToRemove] === (this.container.length - 1)) {
        this.container.pop();
      } else {
        this.container[indexToRemove] = this.container.pop();
      }
      //get parent and child
      let parent = this.hasParent(indexToRemove) ? this.getParent(indexToRemove) : null;
      let leftChild = this.hasLeftChild(indexToRemove) ? this.getLeftChild(indexToRemove) : null;

      //check if the parent is smaller and there is a left child
      if (
        leftChild !== null &&
        (
          parent !== null &&
          parent < this.container[indexToRemove]
        )
      ) {
        this.heapifyUp(indexToRemove);
      } else {
        this.heapifyDown(indexToRemove);
      }
    }
    return this;
  }
}

const heap = new minHeap;
heap.add(1);
heap.add(2);
heap.add(3);
heap.add(4);
heap.add(5);
heap.add(6);
heap.add(1);
heap.add(0)
heap.container.unshift(19);
heap.container.unshift(18);
heap.remove(19);
heap.heapifyDown(1);
heap.heapifyDown(0);
heap.getParentIndex(2);