"use strict";

//!7.1 ООП. Наследование, инкапсуляция, полиморфизм
//!Функцианальное наследование

function User(firstName, lastName) {
	//this = {}
	this.firstName = firstName;
	this.lastName = lastName;

	this.getFullName = function () {
		return this.firstName + " " + this.lastName;
	};
}
//!Дочерняя функция - конструктор
function Manager(firstName, lastName) {
	console.log(arguments);
	User.apply(this, arguments);

	this.sayHello = function () {
		alert("Hello");
	};

	//!  меняет имя
	this.changeName = function (name) {
		this.firstName = name;
	};
}

var u = new User("John", "Doe");
var m = new Manager("Jane", "Doe");

console.log(u.getFullName());
console.log(m.getFullName());

!Родитель

function Russia(subject, gorod = "красивый город") {
	this.subject = subject;
	this.gorod = gorod;

	this.getFullName = function () {
		return this.subject + " " + this.gorod;
	};
}

//!Дочерний

function Moscow(subject, gorod) {
	console.log(arguments);
	Russia.apply(this, arguments);

	this.subjectName = function (name) {
		this.subject = name;
	};
}

var m = new Russia("Москва");
var o = new Moscow("Московская область", "город Зеленоград");