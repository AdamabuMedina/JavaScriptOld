//!8.4 Обработка исключений (throw, catch)
//!
//try {
//  var a = b;
//} catch (ex) {
//  console.log(ex);
//  console.log("Error" + ex);
//}

//!
//var str = prompt("Введите JSON: ");

//try {
//  var json = JSON.parse(str);
//} catch (ex) {
//  console.log("Введен некроректный JSON");
//}

//console.log(json);

//!throw - перехватывает ошибку
//var age = prompt("Введите ваш возраст");
//var birthYaer = new Date().getFullYear() - age;

//if (isNaN(birthYaer)) {
//  throw "Введено не числовое значение";
//} else if (age !== null) {
//  alert("Ваш год рождения: " + birthYaer);
//}

//! перехватывание ошибки внешне

//function calcBirthYear() {
//  var age = prompt("Введите ваш возраст");
//  var birthYaer = new Date().getFullYear() - age;

//  if (isNaN(birthYaer)) {
//    throw "Введено не числовое значение";
//  } else if (age !== null) {
//    alert("Ваш год рождения: " + birthYaer);
//  }
//}

//try {
//  calcBirthYear();
//} catch (ex) {
//  alert("Ошибка ввода: " + ex);
//}