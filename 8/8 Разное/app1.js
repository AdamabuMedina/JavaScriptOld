//8.2 setTimeout и setInterval

//!setTimeout - Вызов функции или выполнение фрагмента кода после указанной задержки.

//!Пример
//setTimeout(function () {
//	alert("Прошла секунда!")
//}, 1000);

//!Пример
//function sayHello(name) {
//	alert("Привет, " + name);
//}

//setTimeout(sayHello, 1000, "Adam");

//!Пример с объектом

//var car = {
//	sayHello: function () {
//		console.log("Поехали!");
//	},
//	start: function () {
//		console.log("Заводимся...");
//setTimeout(
//	function () {
//	console.log(this);
//	this.sayHello(); //будет ошибка потому что через секунду функция выполнится не в том контексте в котором она была создана
//}, 
//	!1 - вариант вызывает явно
//	this.sayHello, 1000);
// !2-вариант делаем ссылку на this
//var self = this;
//setTimeout(function () {
//	self.sayHello();
//}, 1000);
// !3  вариант (продвинутый) использует bind - привязка к контексту
//		function sayHelloLater() {
//			this.sayHello();
//		}
//		sayHelloLater = sayHelloLater.bind(this);

//		setTimeout(sayHelloLater, 1000);
//	}
//}

//car.start();

//!Таймаут и интервал можно остановить или отменить при помощи методов clear
var interval = setInterval(function () {
	console.log(Date());
}, 1000)

clearInterval(interval);