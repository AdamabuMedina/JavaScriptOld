//!8.6 Строгий режим (strict mode)
"use strict";
//a = 1; //всегда использовать объявление переменной

function foo(a, b, c) {
	var a = 1;
	eval("var b = a + 1");
	return b;
}
console.log(foo())