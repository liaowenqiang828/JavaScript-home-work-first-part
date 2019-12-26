var init = [];
window.localStorage.setItem("taskData", init);

function loadDataToList() {
  var taskList = document.getElementById("allTaskList");
  var taskData = loadData();
  var LI = document.createElement("li");

  if (taskData !== null) {
    for (var i = 0, len = taskData.length; i < len; i++) {
      LI.innerHTML = `
        <input type="checkbox" id="itemcheck-${i}" name="check" onclick="checkAndUpdate(this)">
        <span>"${taskData[i].taskName}"</span>`;
      taskList.appendChild(LI);
    }
  } else {
    LI.innerHTML = ``;
    taskList.appendChild(LI);
  }
}

function addNewElement(event) {
  var storage = window.localStorage;
  var item = {
    "taskName": "",
    "check": false
  };

  item.taskName = document.getElementById("myInput").value;
  var tempData = JSON.parse(storage.getItem("taskData"));
  if (tempData === null) {
    tempData = [];
  } else {
    tempData.push(item);
  }

  saveData(tempData);
  document.getElementById("myInput").value = "";
  loadDataToList(); 
}

function saveData(tempData) {
    var storage = window.localStorage;

    storage.setItem("taskData", JSON.stringify(tempData));
}

function loadData() {
  var history = localStorage.getItem("taskData");
  if (history !== null) {
    return JSON.parse(history);
  } else {
    return [];
  }
}

function checkAndUpdate(event) {
  var targetId = event.id;
  var i = targetId.substr(targetId.length-1, 1);

  var tempData = JSON.parse(window.localStorage.getItem("taskData"));
  tempData[i]["check"] = "true";
  window.localStorage.setItem("taskData", JSON.stringify(tempData));

  var fatherNodeLi = event.parentNode;
  fatherNodeLi.setAttribute("class", "liAfterCheck");
}


document.getElementById("ALL").addEventListener("click", displayAll);
document.getElementById("Active").addEventListener("click", displayActive);
document.getElementById("Complete").addEventListener("click", displayComplete);

function displayAll() {
  var Ol = document.getElementById("allTaskList");
  Ol.innerHTML = ""; 

  var data = JSON.parse(window.localStorage.getItem("taskData"));
  for (var i = 0, len = data.length; i < len; i++) {
    var activeLi = document.createElement("li");
    activeLi.innerHTML = `
    <input type="checkbox" id="itemcheck-${i}" name="check" onclick="checkAndUpdate()">
    <span>"${data[i].taskName}"</span>`;

    Ol.setAttribute("id", "allTaskList");
    Ol.setAttribute("class", "orderList");
    Ol.appendChild(activeLi);
  }
}

function displayActive() {
  var Ol = document.getElementById("allTaskList");
  Ol.innerHTML = ""; 

  var data = JSON.parse(window.localStorage.getItem("taskData"));
  for (var i = 0, len = data.length; i < len; i++) {
    if (!data[i].check) {
      var activeLi = document.createElement("li");
      activeLi.innerHTML = `
      <input type="checkbox" id="itemcheck-${i}" name="check" onclick="checkAndUpdate()">
      <span>"${data[i].taskName}"</span>`;

      Ol.setAttribute("id", "allTaskList");
      Ol.setAttribute("class", "orderList");
      Ol.appendChild(activeLi);
    }
  }
}

function displayComplete() {
  var Ol = document.getElementById("allTaskList");
  Ol.innerHTML = "";

  var data = JSON.parse(window.localStorage.getItem("taskData"));
  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i].check) {
      var completeLi = document.createElement("li");
      completeLi.innerHTML = `
      <input type="checkbox" id="itemcheck-${i}" name="check" onclick="checkAndUpdate()" checked="true">
      <span>"${data[i].taskName}"</span>`;

      Ol.setAttribute("id", "allTaskList");
      Ol.setAttribute("class", "orderList");
      Ol.appendChild(completeLi);
    }
  }
}

function clear() {
  localStorage.clear();
  addNewElement();
}
clear();