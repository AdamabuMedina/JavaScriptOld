//'use strict';
//!6.2 Контекст вызова


//function User(firstName, lastName) {
//this = {}
//this наследует прототип (prototype)

//  Публичные и внутренние переменные
//	var foo = "bar"; // локальная (внутренняя)
//	this.foo = "bar"; //публичная

//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.isAdmin - false;

//	this.getFullName = function () {
//		console.log(this);
//		return this.firstName + " " + this.lastName;
//	}
//}

//на глобальном уравное this === window. Это приводит к ошибкам. Чтоб этого не было надо вызывать строгий режим 'use strict'

//function getName() {
//	console.log(this);
//}

//var myUser = new User("Adam", "Barkinkhoev");
//var anotherUser = new User("Selima", "Betisheva");

//console.log(myUser.getFullName());
//console.log(anotherUser.getFullName());

////getName();

//!Контекст равен объекту именно тогда когда метод вызван через точку после названия данного объекта