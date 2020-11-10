//Обычный объект

//var user = {
//  firstName: "Adam",
//  lastName: "Barkinkhoev",
//  getFullName: function () {
//    return this.firstName + " " + this.lastName;
//  },
//};

//!6.2 Функция - Конструктор

//function User(firstName, lastName) {
//	//this = {}
//	//this наследует прототип (prototype)

//	//  Публичные и внутренние переменные
//	var foo = "bar"; // локальная (внутренняя)
//	this.foo = "bar"; //публичная

//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.isAdmin - false;

//	this.getFullName = function () {
//		return this.firstName + " " + this.lastName;
//	};

//если задать явно объект return то всегда возвращается именно это значение. Если же задается в return числовое, булевое или строчное значение, то функция работает как надо.

//  return {
//    name: "Adam",
//  };

//  автоматически происходит return this
//}
//Создаем экземпляры объектов
//var myUser = new User("Adam", "Barkinkhoev");
//var anotherUser = new User("Selima", "Betisheva");

//console.log(myUser.getFullName());
//console.log(anotherUser.getFullName());