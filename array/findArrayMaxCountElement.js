var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function maxCountElement(array) {
  var tempObj = {};
  for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (tempObj[key]) {
      tempObj[key]++;
    }
    else {
      tempObj[key] = 1;
    }
  }

  var maxCount = 0;
  var maxElement = array[0];
  
  for (var key in tempObj) {
    if (maxCount < tempObj[key]) {
      maxCount = tempObj[key];
      maxElement = key;
    }
  }
  return maxElement;
}

var maxElementOfArray = maxCountElement(a);
console.log(maxElementOfArray);