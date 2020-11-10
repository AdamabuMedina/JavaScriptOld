// use strict
let editor = document.getElementById("editor");
let redactor = document.getElementById("redactor-btn");
let save = document.getElementById("save-btn");
let exit = document.getElementById("exit-btn");

save.setAttribute("disabled", "disabled");
exit.setAttribute("disabled", "disabled");

(function () {
   if (localStorage.getItem("text_in_editor") !== 0) {
      editor.innerHTML = localStorage.getItem("text_in_editor");
   }
})();

function redactionEditor() {
   editor.setAttribute("contenteditable", "true");
   redactor.setAttribute("disabled", "disabled");
   save.removeAttribute("disabled", "enabled");
   exit.removeAttribute("disabled", "enabled");
};

function saveRedaction() {
   localStorage.setItem("text_in_editor", editor.innerHTML)
   editor.removeAttribute("contenteditable", "false");
   redactor.removeAttribute("disabled", "enabled");
   save.setAttribute("disabled", "disabled");
   exit.setAttribute("disabled", "disabled");
};

function exitRedaction() {
   editor.innerHTML = localStorage.getItem("text_in_editor");
   editor.removeAttribute("contenteditable", "false");
   redactor.removeAttribute("disabled", "enabled");
   save.setAttribute("disabled", "disabled");
   exit.setAttribute("disabled", "disabled");
};


redactor.addEventListener("click", redactionEditor);
save.addEventListener("click", saveRedaction);
exit.addEventListener("click", exitRedaction);

console.log(editor)