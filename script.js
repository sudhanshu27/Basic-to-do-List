var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
//create new item 
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("delete"));
  deleteButton.classList.add("delete");
  li.appendChild(deleteButton);
  ul.appendChild(li);

  input.value = "";

  deleteButton.style.marginLeft = "10px";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
function deleteItem() {}

//EVENTS

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
});
