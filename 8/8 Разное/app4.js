//!8.5 Регулярные выражения

/1/.test("1");

/\d/.test("5");

//на количество символов

/\d{3}/.test();

//проверка ввода номера телефона

var phone = prompt("Введите номер телефона в формате ХХХ-ХХ-ХХ");
var isValidePhone = /\d{3}-\d{2}-\d{2}/.test(phone);

if (isValidePhone) {
	alert(Thaks)
} else {
	alert("Error")
}