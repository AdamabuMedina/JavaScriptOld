//8.1 Объект arguments

function showArgs() {
	//console.log("Передано аргументов: " + arguments.length);
	//console.log(arguments[0]);
	//console.log(arguments[1]);
	//!разница между массивом и arguments
	//console.log(arguments.constructor.name);
	//console.log([1, 2, 3].constructor.name);
	//! так как arguments является объектом то method join ему не подойдет и в этом случае выйдет ошибка
	//return arguments.join(", ")
	//! этот метод подходит для ES5
	var args = Array.prototype.slice.call(arguments);
	//Array - конструктор массива
	//prototype - спец свойство
	//Метод slice() возвращает новый массив, содержащий копию части исходного массива
	//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.

	//! для ES6
	var args = Array.from(arguments);
	var args = [...arguments]; //spread operator

	return args.join(", ");
}

console.log(showArgs("foo", "bar", "hello"));