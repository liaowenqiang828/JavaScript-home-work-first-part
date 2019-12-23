const data = require("./data.json");
var selectedData = [];

function productSelect(data) {
  for (item in data) {
    if (item.select === "true") {
      selectedData.push(item);
    }
  }
  return selectedData; // 首先对商品进行选择，放入一个数据数组对象中。
}


var item = {
  "id": 1,
  "name": "英雄牌 钢笔",
  "count": 1,
  "price": 69,
  "checked": false
}

// 点击商品数量加号触发事件的处理函数：
function addCount(selectedData, target) {
  return selectedData.map(function (item) {
    if (item.name === target) {
      item.count++;
    }
  });
}
// 点击商品数量减号触发事件的处理函数：
function subCount(selectedData, target) {
  return selectedData.map(function (item) {
    if (item.name === target) {
      item.count--;
    }
  });
}

// 点击商品选择时触发事件的处理函数：
function addItem(event) {
  selectedData.push()
}

// 点击全选触发事件的处理函数：
function allSelected() {
  selectedData = data;
  // return selectedData;
}

function productMoney(item) {
  return item.price * item.count;
}

// 商品数量减为0 则删除该商品：
function itemRemove(item) {
  if (item.count === 0) {
    selectedData.pop(item);
  }
}

function productTotalNum(selectedData) {
  var result = 0;
  for (item in selectedData) {
    result += item.count;
  }
  return result;
}

function moneyToPay(selectedData) {
  var result = 0;
  for (item in selectedData) {
    result += item.productMoney; // 单种商品总价保存
  }
  return result;
}




