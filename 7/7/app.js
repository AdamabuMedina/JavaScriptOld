function Vehicle(nameTransport, categoryTransport, maxSpeed, year, made, velocity, control, weight, color, passengerCapacity) {

  this.nameTransport = "Транспорт";
  this.categoryTransport = "Пассажирский";
  this.maxSpeed = "120 км/ч";
  this.year = 2020;
  this.made = "Germany";
  this.velocity = "Километры";
  this.control = "автоматическое управление";
  this.weight = "тонн";
  this.color = "белый";
  this.passengerCapacity = "100";


  this.isWorking = function () {
    return true;
    //("Категория транспортного средства: " + this.categoryTransport + ";" + "\nНаименование транспортного средства: " + this.nameTransport + ";" + "\nПассажирская вместимость транспортного средства: " + this.passengerCapacity + ";" + "\nМаксимальная скорость транспортного средства: " + this.maxSpeed + ";" + "\nМаксимальная разрешенная масса транспортного средства: " + this.maxPermittedWeight + ".")
  }
}


function Car(control, color, passengerCapacity, weight) {
  Vehicle.apply(this, arguments);
  this.control = control;
  this.color = color;
  this.passengerCapacity = passengerCapacity;
  this.weight = weight;
}

function Ship(nameTransport, maxSpeed, year, made, velocity, passengerCapacity, weight) {
  Vehicle.apply(this, arguments);
  this.nameTransport = nameTransport;
  this.maxSpeed = maxSpeed;
  this.year = year;
  this.made = made;
  this.velocity = velocity;
  this.passengerCapacity = passengerCapacity;
  this.weight = weight;
  this.isWorking = false;
}

function Plane(nameTransport, maxSpeed, passengerCapacity, weight) {
  Vehicle.apply(this, arguments);
  this.nameTransport = nameTransport;
  this.maxSpeed = maxSpeed;
  this.passengerCapacity = passengerCapacity;
  this.weight = weight;
}




let vehicle = new Vehicle();
let car = new Car("Ручная коробка передач", "Красный", "57 пассажирских мест", "20 тонн");
let ship = new Ship("Титаник", "23 узла", "1912 год", "Англия", "морские узлы", "2439 пассажирских коек", "46328 тонн.");
let plane = new Plane("Airbus А380", "1185 км/ч", "853 пассажира", "560 тонн");

console.log(car);
console.log(ship);
console.log(plane);