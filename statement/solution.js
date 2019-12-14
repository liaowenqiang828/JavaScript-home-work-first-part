//JavaScript语句
// 第一题：
function scoreLevel(score) {
  if (score >= 95) {
    console.log("卓越");
  }
  else if (score >= 85) {
    console.log("优秀");
  }
  else if (score >= 75) {
    console.log("一般") ;
  }
  else if (score >= 60) {
    console.log("及格");
  }
  else {
    console.log("不及格");
  }
}

var score = 77;
scoreLevel(score); // 输出一般

// 第二题：
function calculator(x, y, operator) {
  switch (true) {
    case operator === "+":{
      console.log(x + y);
      break;
    }
    case operator === "-":{
      console.log(x - y);
      break;
    }
    case operator === "*":{
      console.log(x * y);
      break;
    }
    case operator === "/":{
      console.log(x / y);
      break;
    }
    case operator === "%":{
      console.log(x % y);
      break;
    }
    default:
      console.log("请输入正确的运算数和运算符！！");
  }
}
var x = 10;
var y = 8;
var operator = "-";
calculator(x, y, operator); // 输出为2


// 第三题：
function sum(number) {
  var result = 0;
  var i = 1;

  while (i <= number) {
    if (i % 10 === 3) {
      i += 1;
      continue;
    }
    result += i;
    i += 1;
  }
  return result;
}
var number = 100;
var sumResult = sum(number);
console.log(sumResult); // 输出4570

// 第四题：
function printStars(numOfLines) {
  var stars = "";
  for (var i = numOfLines; i > 0; i--) {
    for (var j = 1; j <= i; j++) {
      stars += "* ";
      if (j === i) {
        stars += "\n";
      }
    }
  }
  return stars;
}

var numOfLines = 6;
var result = printStars(numOfLines);
console.log(result);


// 第五题
function printMultiplicationTable() {
  var result = "";
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
      result += i + "*" + j + "=" + i * j + "  ";
      if (i === j) {
        result += "\n";
      }
    }
  }
  return result;
}

var resultPrint = printMultiplicationTable();
console.log(resultPrint);