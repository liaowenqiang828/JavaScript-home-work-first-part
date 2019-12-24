let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var options = {
  url: "https://zhuanlan.zhihu.com/api/columns/biancheng/articles",
  method: "get",
  headers: {key: "Content-Type", value:"application/x-www-form-urlencoded"},
  data: "uers name",
  success: function(xhr) {
    console.log(xhr.responseText);
  },
  fail: function(xhr) {
    console.log("failed to request");
  }
};

var request = function(options) {
  let ajaxInstance = new XMLHttpRequest();

  if (options.method === "post") {
    ajaxInstance.open("post", options.url);

    ajaxInstance.setRequestHeader(options.headers.key, options.headers.value);
    ajaxInstance.send(encodeURIComponent(options.data));

    ajaxInstance.onreadystatechange = function() {
      if (ajaxInstance.readyState === 4 && ajaxInstance.status === 200 || ajaxInstance.status === 304) {
        options.success(ajaxInstance);
      } else {
        options.fail();
      }
    };

  } else {
    ajaxInstance.open("get", options.url);
    ajaxInstance.send();
    ajaxInstance.onreadystatechange = function() {
      if (ajaxInstance.readyState === 4 && ajaxInstance.status === 200 || ajaxInstance.status === 304) {
        options.success(ajaxInstance);
      } else {
        options.fail();
      }
    };
  }
}

request(options);