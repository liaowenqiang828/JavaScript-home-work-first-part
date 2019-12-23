load();

function load() {
  var data = getData();
  setFormat();

  function setFormat() {
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

    tableHeader.innerHTML = `<td class="tableCell">选择</td>
    <td class="tableCell">商品名称</td>
    <td class="tableCell">商品单价</td>
    <td class="tableCell">商品数量</td>
    <td class="tableCell">总价（￥）</td>`;

    data.map((item) => {
      var productTable = document.getElementById("productTable");
      var aProduct = document.createElement("tr");
      
        aProduct.innerHTML =  `
          <td class="tableCell" ><input class="checkBox" type="checkbox" id="checkBox${item.id}"></td>
          <td class="tableCell">${item.name}</td>
          <td class="tableCell" id="price${item.id}">${item.price}</td>
          <td class="tableCell"><input type="button" class="countSub" value="-" id="sub${item.id}"></input><div class=countNum id="count${item.id}">${item.count}</div><input type="button" value="+" class="countAdd" id="add${item.id}"></input></td>
          <td class="tableCell" id="money${item.id}">${item.money}</td>`

        productTable.appendChild(aProduct);
    });
  
    var check = document.getElementsByClassName("checkBox");
    for (var i = 0, len = check.length; i < len; i++) {
      if (data[i]["checked"]) {
        check[i].setAttribute("checked", "true");
      }
    }

    var sumLine = document.createElement("tr");
    sumLine.innerHTML = `
      <td class="tableCell"><input class="checkAll" type="checkbox" id="checkAll" /></td>
      <td class="totalMoneyCal" colspan="4" id="sumMoney"></td>`
      // 共计${SumCount}件商品，总价${TotalMoney} ￥</td>`

    productTable.appendChild(sumLine);
  }


  function getData() {
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

  var container = document.getElementById("carProductPage");
  container.onclick = function(event) {
    var target = event.target;
    var i = target.id.substring(target.id.length-1);
    var buttonType = target.type;

    if (buttonType === "button") {
      changeCount(target);
      sumCal();
      totalMoney();
      productMoneyCal(i);
      
    } else if (buttonType === "checkbox") {
      if (target.id === "checkAll") {
        checkAll();
      }
      sumCal();
      productMoneyCal(i);
      totalMoney();
    }
  }
  
  function changeCount(target) {
    var i = target.id.substring(target.id.length - 1);
    var countNum = document.getElementById(`count${i}`).innerText;
    if (target.value === "-") {
      countNum--;
      if (countNum >= 0) {
        document.getElementById(`count${i}`).innerText = countNum;
      }
    } else {
      countNum++;
      document.getElementById(`count${i}`).innerText = countNum;
    }
  }

  function productMoneyCal(i) {
    var i = i;
    var count = document.getElementById(`count${i}`).innerText;
    var price = document.getElementById(`price${i}`).innerText;

    document.getElementById(`money${i}`).innerText = price * count;
  }


  function sumCal() {
    var sum = {totalCount: 0, totalMoney: 0};

    var allCheckBox = document.getElementsByClassName("checkBox");
    for (var j = 0, len= allCheckBox.length; j < len; j++) {
      var index = allCheckBox[j].id.substring(allCheckBox[j].length - 1);
      var count = document.getElementById(`count${index}`).innerText;
      var money = document.getElementById(`money${index}`).innerText;

      if (allCheckBox[j].checked === true) {
        sum.totalCount += parseInt(count);
        sum.totalMoney += parseInt(money);
      }
      document.getElementById("sumMoney").innerText = "共计" + sum.totalCount + "件商品，" + sum.totalMoney+ "￥";
    }
  }


  function checkAll () {
    for (var i = 0, len = data.length; i < len; i++) {
      data[i]["checked"] = "true";
    }
  }

  function clicking(event) {
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

    sumCount();
    totalMoney();
    checkAll();
  }

}