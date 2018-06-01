/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var finalArray = [];
  for (var n = 0; n < list1.length; n++) {
    for (var i = 0; i < list2.length; i++) {
      if (list1[n] === list2[i]) {
        var leastIndexSum = n+i;
        if( leastIndexSum < finalArray.leastIndexSum || finalArray.length === 0) {
          finalArray[0] = {
            "name": list1[n],
            "leastIndexSum": leastIndexSum,
          }
        }
        else if(leastIndexSum === finalArray[0].leastIndexSum) {
          finalArray.push(
            {
            "name": list1[n],
            "leastIndexSum": leastIndexSum,
            }
          )
        }
      }
    }
  }
    var editList = [];
    finalArray.forEach((item) => {
        editList.push(item.name);
    })
    return editList;
}