'use strict'
//!7.3 Прототипное наследование
//!Что такое prototype





//!Как создавать прототип
var a = {
	foo: 1
}

var b = {}
//Проверяет есть ли собственное свойство у объекта 
b.hasOwnProperty("foo") //true || false
b.foo //undefined
a.foo // 1

//указывает объекту b свойства объекта а
b.__proto__ = a
b.foo // 1

//если изменить в "а" свойство
a.foo = 2
//то и "b" измениться свойство foo

//если проверить свойтсво собствренное 
b.hasOwnProperty("foo") // будет false

//!прототип конструктора (способ без увелечения нагрузки на производительность)
//!Базовая (родительская) функция конструктор
function User(firstName, lastName) {
	//this = {}
	this.firstName = firstName;
	this.lastName = lastName;
}
User.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName;
};


//!Дочерняя функция - конструктор
function Manager(firstName, lastName) {

	User.apply(this, arguments);

	this.sayHello = function () {
		alert("Здравствуйте, чем я могу вам помочь?");
	};

	this.changeName = function (name) {
		this.firstName = name;
	};
}

u.toString = function () {
	return "[object u]"
}

//!разница между __proto__ и prototype - 1) proto создается для объектов  которые были созданы при помощи констукторов. 2) свойство prototype не существует именно у конечных объектов, оно существует только у самих функций конструкторов. Оно позволяет определять структруру того объекта, который будет создан при вызове данного конструктора. Оно позволяет создавать склад - прототип того объекта который будет создан и этот объект при обращении к свойствам методам может пойти и посмотреть "а есть ли в прототипе такое свойство или метод"


//!Важно знать. constructor есть у функции и он ссылается на ту функцию внутри которой он создан 

function F() {}
F.prototype // constructor: F()

var f = new F()
f.constructor //ƒ F() {}

//можно создать новый экземпляр нового объекта без помощи new F()

var g = f.constructor()

//!При помощи instanceof можно проверить действительно ли данный объект f является ли  экземпяром функции F
f instanceof F //true
g instanceof F // false потому что он был создан не на прямую.

//!если создать два объекта, у каждого из них будет доступ к методу getFullName
var u1 = new User("John", "Doe")
var u2 = new User("Jane", "Doe")

u1.getFullName() // "John Doe"
u2.getFullName() // "Jane Doe"

//!
User.prototype.sayHello = function () {
	alert("Здравствуйте!");
}

u1.sayHello() // "Здравствуйте!"
u2.sayHello() // "Здравствуйте!"
//! 
User.prototype.address = {
	city: "Moscow",
	country: "Russia"
}

u1.address
u2.address.city = "Saint Peterburg" //меняет свойство для всех пользователей u (1,2,3 .. )

u2 // __proto__ изменилось свойство city и в u1 так же измениться это свойство 

//! правило - 1 стараться хранить в прототипе примитивные значения. 2 стараться работать с совбственными значения при помощи методов а не прямую изменения свойствю Полезно для сохранения инскапсуляции.  