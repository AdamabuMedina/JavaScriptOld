//!Домашняя работа Задание №2

const users = [{
		name: "Андрей",
		login: "andrei",
		password: "petrovAndr"
	},
	{
		name: "Иван",
		login: "ivan",
		password: "passIvan"
	},
	{
		name: "Антон",
		login: "anton",
		password: "chehov"
	}
]

let userLog = {
	login: prompt('login'),
	password: prompt('password')
}

function usersLogIn() {
	for (let i = 0; i < users.length; i++) {
		if (userLog.login === users[i].login && userLog.password === users[i].password) {
			alert('Привет, ' + users[i].name);
			break;
		} else if (i === users.length - 1) {
			alert('Такого пользователя нету :( ');
		}
	}
}
usersLogIn()