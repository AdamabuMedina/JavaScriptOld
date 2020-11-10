'use strict';

//!6.3 Привязка контекста (call, apply и bind)

////Конекст (this) постоянно меняется. Если есть необходимость когда нужно привязать функцию к какому то контексту или просто выполнить в контексте функцию. Для этого есть спец возможности в js.

//function User(firstName, lastName) {

//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.isAdmin - false;


//}


//function getFullName(prefix, suffix) {
//	//console.log(this);
//	return prefix +
//		", " +
//		this.firstName +
//		" " +
//		this.lastName +
//		suffix;
//}

//var myUser = new User("Adam", "Barkinkhoev");
//var anotherUser = new User("Selima", "Betisheva");



////call (вызов функции) вспомогательный метод

//console.log(getFullName.call(myUser, "hi", "!"))

////если у функции множество параметров или неограниченное количество, то для того чтоб их передать необходимо воспользоваться другим вспомагательным методом
////apply (первый параметр контекст, второй параметр это массив)
//console.log(getFullName.aplly(myUser, ["hi", "!"]))


//// если вызвать 
//Math.max([2, 50, 60, 90, 70]);
////то вызовется NaN, можно сделать это с помощью apply
//Math.max.apply(null, [2, 50, 60, 90, 70]);

//!Как жестко привязать контекст выполнения определенной функции к определенному объекту

var a = {
	name: "foo",
	getName: function () {
		return this.name
	}
};

//.bind (привязка) в качестве первого параметра
//передается тот объект к которому мы ходим передать данную функцию и создаем копию.

// в данном примере аргументов является объект .bind(a);



var b = {
	name: "bar",
	getName: a.getName.bind(a) // теперь объект b жестко привязан к объекут a, это используется особеено для react.
}