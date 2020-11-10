//!Задание №1
function start() {
  try {
    "use strict";
    let expr = prompt("Введите любой JS код");
    alert(eval(expr));
  } catch (err) {
    console.log("произошла ошибка: " + err)
  }
}

start();


//!Задание №2
function filterByType(type, ...arr) {
  return arr.filter(e => typeof e === type)
}
let obj = filterByType('string', "10", 20, 'a', 'b', true, false);
alert(obj);