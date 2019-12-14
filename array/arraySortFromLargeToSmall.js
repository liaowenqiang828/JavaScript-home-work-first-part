var a = [5, 1, 8, 10, 4];

function arraySortFromLargeToSmall(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

var arraySorted = arraySortFromLargeToSmall(a);
console.log(arraySorted);

