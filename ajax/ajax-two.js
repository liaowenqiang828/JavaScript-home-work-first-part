
var request = function(options) {
  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  let ajaxIstance = new XMLHttpRequest();

  if (options.method === "post") {
    ajaxIstance.open(options.url, "post",false);

    ajaxIstance.setRequestHeader(options.headers.key, options.headers.value);
    ajaxIstance.send(encodeURIComponent(options.data));
    
    } else {
      ajaxIstance.open(options.url, options.method, false);
      ajaxIstance.send();
    }

    ajaxIstance.onreadystatechange = function() {
      if (ajaxIstance.readyState === 4 && ajaxIstance.status === 200 || ajaxIstance.status === 304) {
        // options.success(ajaxIstance.responseText);
        console.log(ajaxIstance.responseText);

      } else {
        // options.fail("some error happen!!");
        console.log("some error happens");
      }
    }
  }

  var options = {
    url: "https://zhuanlan.zhihu.com/p/64167474",
    method: "get",
    headers: {key: "Content-Type", value:"application/x-www-form-urlencoded"},
    data: "uers name",
    success: function(result) {console.log(result)},
    fail: function(error) {console.log(error)}
  }
  
  request(options);