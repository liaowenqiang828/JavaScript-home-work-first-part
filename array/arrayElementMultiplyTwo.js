var  aArray = [1, 2, 3, 4, 5];

var arrayMultipleTwo = aArray.map(function (item, index, array) {
  return item * 2;
});

console.log(arrayMultipleTwo);