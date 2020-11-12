//ES
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//    if (ev.target.tagName === 'LI') {
//       ev.target.classList.toggle('checked');
//    }
// }, false);

// function newElement() {
// var li = document.createElement("li");
// var inputValue = document.getElementById("myInput").value;
// var t = document.createTextNode(inputValue);
//    li.appendChild(t);
//    if (inputValue === '') {
//       alert("Задача не введена!");
//    } else {
//       document.getElementById("myUL").appendChild(li);
//    }
//    document.getElementById("myInput").value = "";
// }

// ES2015
let list = document.querySelector("ul")
list.addEventListener("click", func = (ev) => {
   if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked")
   }
}, false)

let newElement = () => {
   let li = document.createElement("li")
   let inputValue = document.getElementById("myInput").value
   let text = document.createTextNode(inputValue)
   li.appendChild(text)
   if (inputValue === "") {
      alert("Задача не введена!")
   } else {
      document.getElementById("myUL").appendChild(li)
   }
   document.getElementById("myInput").value = "";
}