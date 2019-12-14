function toCamelStyle(str) {
  if (str === null) {
    console.log("input right strings");
    return;
  }

  var i = 1;
  var arr = [str[0]]; // 第一个字母始终都会保持原型

  while (i < str.length) {
    if (str[i] != "_") {
      arr.push(str[i]);
      i += 1;
    }
    else {
      arr.push(str[i + 1].toUpperCase());
      i += 2;
    }
  }
  return arr.join("");
}

var camelStyleString = toCamelStyle("_a_b_c_d_ef");
console.log(camelStyleString);