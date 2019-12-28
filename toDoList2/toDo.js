// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");

  var check = document.createElement("input");
  check.type = "checkbox";
  check.onclick = "checking";
  // check.className = "checkBoxSize";
  li.appendChild(check);
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);

  document.getElementById("taskList").appendChild(li);
  document.getElementById("myInput").value = "";
}

function checking(event) {
  var targetLi = event.currentTarget.parentElement;
  targetLi.setAttribute("className", "checked");
} 