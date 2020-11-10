//!8.3 Выполнение кода через eval  - Метод eval() выполняет JavaScript код, представленный строкой.

eval("2 + 2");

eval("var foo = 123");
window.foo;

//eval знает про ту зону видимости где он вызван

function test() {
	var a = 1;
	eval("var b = a + 1");
	return b
}

console.log(test());
//!eval скорее всего никогда не потребуется (не безопасно)