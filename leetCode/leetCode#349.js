var intersection = function(nums1, nums2) {
  const result =  nums1.filter((item) => {
    if (nums2.includes(item) === true) {
      while (nums2.includes(item)) {
        let index = nums2.findIndex(element => element === item);
        nums2.splice(index, 1);
      }
      if (item === 0) {
        item = '0';
      }
      return item;
    }
  });
  return result;
};
const nums1 = [8,0,3,1];

const nums2 = [0,0,1];
intersection(nums1, nums2);  