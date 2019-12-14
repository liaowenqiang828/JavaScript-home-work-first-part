function repeatStr(str, num) {
  var result = "";
  for (var i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

var resultPrint = repeatStr("hello", 4);
console.log(resultPrint);