let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ajax = new XMLHttpRequest();

function myCallback(ajax) {
  console.log(ajax.responseText);
}

ajax.request = function request(url, method, data) {
  if (arguments[2]) {
    ajax.open(url, "post", data);
    ajax.send();
  } else {
    ajax.open(method, url);
    ajax.send();
  }
  ajax.onreadystatechange = function() {
    if (ajax.readyState === 4 && ajax.status === 200 || ajax.status === 304) {
      console.log(ajax.responseText);
    }
  }
} 

ajax.request("https://zhuanlan.zhihu.com/p/64167474", "get");