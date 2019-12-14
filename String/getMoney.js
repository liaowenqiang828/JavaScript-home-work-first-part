var money = "￥ 20";

function getMoney(money) {
  var arr = money.split("￥");

  return parseInt(arr[1].trim());
}

var moneyValue = getMoney(money);
console.log(moneyValue);
