//!Вариант №1

"use strict";

function User(firstName, lastName, regDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = regDate;
}

function UserList() {
  this.users = [];

  this.add = function (user) {
    this.users.push(user);
  };
  this.getAllUsers = function () {
    for (let user of this.users)
      console.log(
        `Имя: ${user.firstName}\nФамилия: ${
          user.lastName
        }\nРегистрация: ${user.regDate.toLocaleDateString()}\n`
      );
  };
}

function userLogin() {
  let list = new UserList();
  let user, userArray;
  while (
    (user = prompt("Введите имя и фамилию")) &&
    (userArray = user.split(" ")) &&
    userArray.length === 2
  ) {
    list.add(new User(userArray[0], userArray[1], new Date()));
  }

  list.getAllUsers();
}
userLogin();

//!Вариант №2
//function User(firstName, lastName) {
//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.regDate = new Date();
//}

//User.prototype.toString = function () {
//	return this.firstName + ' ' +
//		this.lastName + ' ' +
//		'Дата регистрации: ' + this.regDate.toLocaleDateString('ru-RU', {
//			weekday: 'long',
//			year: 'numeric',
//			month: 'long',
//			day: 'numeric',
//			hour: 'numeric',
//			minute: 'numeric',
//			second: 'numeric'
//		});
//}

//function UserList() {
//	this.users = [];
//	this.add = function (user) {
//		this.users.push(user);
//	};
//	this.getAllUsers = function () {
//		for (let user of this.users) {
//			console.log(user.toString());
//		}
//	}
//}

//let userList = new UserList(),
//	loginUser;

//while (loginUser = prompt("Введите ваше Имя и Фамилию", "")) {
//	let nameUser = loginUser.split(' ');
//	if (nameUser.length === 2) {
//		let user = new User(nameUser[0], nameUser[1]);
//		userList.add(user);
//	} else {
//		alert("Введите ваше Имя и Фамилию");
//	}
//}

//userList.getAllUsers();
