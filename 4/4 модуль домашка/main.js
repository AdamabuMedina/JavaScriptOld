//!Домашняя работа Задание №1
let month = ["января", "февраля", "мартя", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let dayWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота", ];
let now = new Date();

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

}

let nowHours = now.getHours() + " " + declOfNum(now.getHours(), ['час ', 'часа ', 'часов ']);
let nowMinutes = now.getMinutes() + " " + declOfNum(now.getMinutes(), ['минута ', 'минуты ', 'минут ']);
let nowSeconds = now.getSeconds() + " " + declOfNum(now.getSeconds(), ['секунда ', 'секунды ', 'секунд ']);

let myString = "Сегодня " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " года, " +
	dayWeek[now.getDay()] + ", " + nowHours + nowMinutes + nowSeconds;

alert(myString);

let myVar = setInterval(myTimer, 1000);

function myTimer() {
	let nowHours = now.getHours() + " " + declOfNum(now.getHours(), ['час ', 'часа ', 'часов ']);
	let nowMinutes = now.getMinutes() + " " + declOfNum(now.getMinutes(), ['минута ', 'минуты ', 'минут ']);
	let nowSeconds = now.getSeconds() + " " + declOfNum(now.getSeconds(), ['секунда ', 'секунды ', 'секунд ']);

	let myString = "Сегодня " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " года, " +
		dayWeek[now.getDay()] + ", " + nowHours + nowMinutes + nowSeconds;

	now = new Date;
	console.log(myString);
}