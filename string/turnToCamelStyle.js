function toCamelStyle(str) {
  // var arr = str;
  if (str === "") {
    console.log("input right strings");
    return;
  }

  var i = 1;
  var arr = [str[0]]; 

  while (i < str.length) {
    if (str[i] === "_") {
      // arr.push(str[i]);
      // arr[i] = "";
      arr.push(str[i + 1].toUpperCase());
      i += 2;
    } else
    {
      // arr.push(str[i + 1].toUpperCase());
      // str[i] = "";
      // str[i + 1] = str[i + 1].toUpperCase();
      arr.push(str[i]);
      i += 1;
    }
  }
  return arr.join("");
  // return arr;
}

var camelStyleString = toCamelStyle("_a_b_c_d_ef");
console.log(camelStyleString);