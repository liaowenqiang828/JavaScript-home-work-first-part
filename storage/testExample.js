if (! window.localStorage ) {
  alert("浏览器不支持localStorage");
  // return;
} else {
  var storage = window.localStorage;

  storage["a"] = 1;
  storage.b = 2;
  storage.setItem("c", 3);

  console.log(typeof storage["a"]);
  console.log(typeof storage["b"]);
  console.log(typeof storage["c"]);
}