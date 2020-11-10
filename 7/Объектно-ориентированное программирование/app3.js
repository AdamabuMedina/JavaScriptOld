'use strict'
////!7.4 Прототипы стандартных объектов

////!прототип - это спец свойство у любой функции - конструктора, который является объектом. В этот объект мы можем записать те свойста и методы которые мы хотим чтоб были доступны всем пользователям. Например если login, getName мы можем записать так user.prototype все объекты получат доступ к этому свойству.


//// String.prototype. Расширяем стандартный объект в  js и задали для него новый метод

//String.prototype.reverse = function () {
//	return this.split("").reverse().join("");
//}
//"Hello".reverse() // "olleh" 

////!Полифиллы



//!

//function Vehicle(categoryTransport, nameTransport, passengerCapacity, maxSpeed, maxPermittedWeight) {
//	this.categoryTransport = categoryTransport;
//	this.nameTransport = nameTransport;
//	this.passengerCapacity = passengerCapacity;
//	this.maxSpeed = maxSpeed;
//	this.maxPermittedWeight = maxPermittedWeight;


//	this.getFullDescription = function () {
//		return ("Категория транспортного средства: " + this.categoryTransport + ";" + "\nНаименование транспортного средства: " + this.nameTransport + ";" + "\nПассажирская вместимость транспортного средства: " + this.passengerCapacity + ";" + "\nМаксимальная скорость транспортного средства: " + this.maxSpeed + ";" + "\nМаксимальная разрешенная масса транспортного средства: " + this.maxPermittedWeight + ".")
//	}
//}

//var plane = new Vehicle("Воздушное судно", "Airbus А380", "853 пассажира", "1 185 км/ч", "560 тонн.");
//var car = new Vehicle("Автомобиль", "MAN Lion's Coach 12.0 MT", "57 пассажирских мест", "120 км/ч", "20 тонн.");
//var ship = new Vehicle("Пароход", "Титаник", "2439 пассажирских коек", "23 узла", "46328 тонн.");


//!

var vehicle = {
	"class": "passenger",
	"velocity": "kilometers",
	"body": "aluminum",
	"control": "manual",
	"weight": "ton",
	"color": "white",
	"getFullDescription": function () {
		return ("Категория транспортного средства: " + this.categoryTransport + ";" + "\nНаименование транспортного средства: " + this.nameTransport + ";" + "\nПассажирская вместимость транспортного средства: " + this.passengerCapacity + ";" + "\nМаксимальная скорость транспортного средства: " + this.maxSpeed + ";" + "\nМаксимальная разрешенная масса транспортного средства: " + this.maxPermittedWeight + ".")
	}
}

var car = {
	__proto__: vehicle,
	"made": "Germany",
	"year": "2020"

}
car.categoryTransport = "Автобус";
car.nameTransport = "MAN Lion's Coach 12.0 MT";
car.passengerCapacity = "57 пассажирских мест";
car.maxSpeed = "120 км/ч";
car.maxPermittedWeight = "20 тонн";

var plane = {
	__proto__: car
}
plane.made = "USA";
plane.categoryTransport = "Воздушное судно";
plane.nameTransport = "Airbus А380";
plane.passengerCapacity = "853 пассажира";
plane.maxSpeed = "1185 км/ч";
plane.maxPermittedWeight = "560 тонн";

var ship = {
	__proto__: plane
}

ship.velocity = "knot speed";
ship.color = "black";
ship.yaer = "1912";
ship.made = "Great Britain";
ship.categoryTransport = "Пароход";
ship.nameTransport = "Титаник";
ship.passengerCapacity = "2439 пассажирских коек";
ship.maxSpeed = "23 узла";
ship.maxPermittedWeight = "46328 тонн.";