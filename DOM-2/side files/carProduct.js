

var data = productMoneyCal();

function productMoneyCal () {
  var data = [
    {
      "id": 1,
      "name": "英雄牌 钢笔",
      "count": 1,
      "price": 69,
      "checked": false
    },
    {
      "id": 2,
      "name": "晨光牌 铅字笔",
      "count": 2,
      "price": 5.5,
      "checked": true 
    },
    {
      "id": 3,
      "name": "晨光牌 铅笔",
      "count": 1,
      "price": 2,
      "checked": false
    },
    {
      "id": 4,
      "name": "狗熊牌 橡皮擦",
      "count": 1,
      "price": 1,
      "checked": false
    },
    {
      "id": 5,
      "name": "瑞士牌 双肩书包",
      "count": 1,
      "price": 199,
      "checked": true
    },
    {
      "id": 6,
      "name": "晨光牌 作业本",
      "count": 5,
      "price": 2.5,
      "checked": false
    }
  ]
  data.map((item) => {
    item.money = item.price * item.count;
  });
  return data;
}


function load() {
  setFormat();  
  function setFormat () {

    var container = document.getElementById("carProductPage");

    var mainTitle = document.createElement("h1");
    container.appendChild(mainTitle);
    mainTitle.innerText = "文具店购物车";

    var table = document.createElement("table");
    container.appendChild(table);
    table.setAttribute("id", "productTable");

    var productTable = document.getElementById("productTable");
    var tableHeader = document.createElement("tr");
    productTable.appendChild(tableHeader);
    productTable.addEventListener("click", clicking);

    tableHeader.innerHTML = `<td class="tableCell">选择</td>
    <td class="tableCell">商品名称</td>
    <td class="tableCell">商品单价</td>
    <td class="tableCell">商品数量</td>
    <td class="tableCell">总价（￥）</td>`;

    data.map((item) => {
      var productTable = document.getElementById("productTable");
      var aProduct = document.createElement("tr");

        aProduct.innerHTML =  `
          <td class="tableCell" ><input class="checkBox" type="checkbox"id="checkBox${item.id}"></td>
          <td class="tableCell">${item.name}</td>
          <td class="tableCell">${item.price}</td>
          <td class="tableCell"><div class="countSub" id="sub${item.id}">-</div><div class=countNum id="count${item.id}">${item.count}</div><div class="countAdd" onclick="clicking" id="add${item.id}">+</div></td>
          <td class="tableCell">${item.money}</td>`

        productTable.appendChild(aProduct);
        aProduct.setAttribute("id", "product" + item["id"]);
    });
  
    var check = document.getElementsByClassName("checkBox");
    for (var i = 0, len = check.length; i < len; i++) {
      if (data[i]["checked"]) {
        check[i].setAttribute("checked", "true");
      }
    }

    var sumLine = document.createElement("tr");

    sumLine.innerHTML = `
      <td class="tableCell"><input class="checkAll" type="checkbox" id="checkAll"/></td>
      <td class="totalMoneyCal" colspan="4" id="sumMoney"></td>`

    productTable.appendChild(sumLine);
    sumLine.setAttribute("id", "selectAllLine");

    function checkAll () {
      for (var i = 0, len = data.length; i < len; i++) {
        data[i]["checked"] = "true";
      }
    }
    
    var totalMoney = sumMoney();
    function sumMoney () {
      var totalMoney = 0;
      for (var i =0, len = data.length; i < len; i++) {
        if (data[i]["checked"]) {
          totalMoney += data[i]["money"];
        }
      }
      return totalMoney;
    };

    var totalCount = sumCount();
    function sumCount () {
      var totalCount = 0;
      for (var i =0, len = data.length; i < len; i++) {
        if (data[i]["checked"]) {
          totalCount += data[i]["count"];
        }
      }
      return totalCount;
    };


    function clicking (event) {
      var targetId = event.target.id;
      var targetIdStr = targetId.substring(targetId.length-1);
      var targetIdNum = targetId.substring(0, targetId.length-1);

      if (targetId === "checkAll") {
        checkAll();
      }
      else if (targetIdStr === "checkBox") {
        data[targetIdNum -1]["checked"] = "true";
      } else if (targetIdStr === "sub") {
          data[targetIdNum -1]["count"] -= 1;
      } else if (targetIdStr === "add") {
          data[targetIdNum - 1]["count"] += 1;
      }
      
      sumMoney();
      sumCount();
    }

  }
}

load();
