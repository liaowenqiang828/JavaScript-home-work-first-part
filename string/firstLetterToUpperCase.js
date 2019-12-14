var sentence = "good afternoon, mr mike.";

function sentenceStartWithUpperCase(str) {
  var newArr1, newArr2 = [];
  newArr1 = str.split(" ");
  for (var i = 0; i < newArr1.length; i++) {
    newArr2.push(newArr1[i][0].toUpperCase(0) + newArr1[i].substring(1));
  }
  return newArr2.join(" ");
}

var sentenceStartWithUpperCaseResult = sentenceStartWithUpperCase(sentence);
console.log(sentenceStartWithUpperCaseResult);
