function multiplicationCalculation() {
  var result = 1;
  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

var resultAfterCalculate = multiplicationCalculation(1, 2, 5, 6);
console.log(resultAfterCalculate);