////Вариант №1
//let userNumber, randomNumber = Math.floor(Math.random() * 1001);

//while (userNumber = prompt("Введите число от 0 до 1000:")) {
//  if (isNaN(userNumber)) {
//    alert("Введите число!");
//  } else if (userNumber > randomNumber) {
//    alert("Меньше!");
//  } else if (userNumber < randomNumber) {
//    alert("Больше!");
//  } else if (userNumber == randomNumber) {
//    alert("Правильно!");
//    break;
//  }
//}

// Вариант №2 (Так и не понял как сделать в этом задании рекурсию)

function startGame() {
  min = Math.ceil(1);
  max = Math.floor(1000);

  let randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomNumber);

  while (true) {
    let userNumber = prompt("Введите число от 0 до 1000");

    console.log(typeof parseInt(userNumber));

    if (userNumber === null) {
      alert("Игра закончена");
      break;
    } else {
      let num = parseInt(userNumber);
      if (isNaN(userNumber)) {
        alert("Введите число!");
        continue;
      } else {
        if (parseInt(userNumber) === randomNumber) {
          alert("Правильно");
        } else if (parseInt(userNumber) > randomNumber) {
          alert("Меньше");
        } else if (parseInt(userNumber) < randomNumber) {
          alert("Больше");
        }
      }
    }
  }
}
startGame();
let playAgain = confirm("Сыграем еще?");
while (true) {
  if (!playAgain) {
    alert("Спасибо за игру");
    break;
  } else {
    startGame();
  }
}
