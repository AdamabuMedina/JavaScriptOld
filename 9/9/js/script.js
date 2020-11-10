// !
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
   if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
   }
}, false);

// !
function newElement() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
      alert("Задача не введена!");
   } else {
      document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";
}