//!5.1 Глобальный объект window

//let foo = 1000;

//!5.2 Сборщик мусора - удаляет переменные которые больше не нужны данной программе
//Лексическое окружение
//Lexical Envoriment - это объект в котором хранятся ссылки которые доступны в текущей зоне видимости. 

/* 
LexicalEnvoriment = {
	window...,
	globalVar: undefined; (1000 после обновления)
	myFunc; function(){...}
}
*/

//debugger; //позволяет проверить по шагам функцию

//function myFunc() {
//Локальная зона видимости
//+ ссылка ан глобальную
//var localVar = "Hello";
//var anotherLocalVar = 2017;
//}

//Глобальная зона видимости
//var globalVar = 1000;
//myFunc();

//!5.3 Замыкания - когда функция имеет доступ к своей локальной зоне видимости, так и к родительской зоне видимости. и может получать и изменять переменные.

////function counter() {
////	//LexicalEnvoriment = {currentCount: 1}
////	var currentCount = 1;
////	return currentCount++;
////}

//function makeCounter() {
//	//LexicalEnvoriment = {currentCount: 1}
//	var currentCount = 1;
//	return function () {
//		//LexicalEnvoriment = {}
//		return currentCount++;
//	}
//}

//var counter = makeCounter();

//!5.4 IIFE - (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.




//(function () {
//	var localVar = 100;


//	window.foo = function () {
//		console.log(localVar);
//	}
//})()