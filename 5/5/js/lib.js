(function startGame() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomNumber = getRandomInt(0, 1000);
  console.log(randomNumber);
  let attempts = 9;

  function playAgain() {
    let playAgainOne = confirm("Сыграем еще?");
    while (true) {
      if (!playAgainOne) {
        alert("Спасибо за игру");
        break;
      } else {
        attempts = 9;
        randomNumber = getRandomInt(0, 1000);
        console.log(randomNumber);
        start();
      }
    }
  }

  window.start = function () {
    while (attempts > 0) {
      let userNumber = prompt("Введите число от 0 до 1000");
      let num = parseInt(userNumber);
      console.log(typeof parseInt(userNumber));

      if (userNumber === null) {
        alert("Игра закончена");
        break;
      } else {
        if (isNaN(userNumber)) {
          alert("Введите число!");
          continue;
        } else {
          if (num === randomNumber) {
            alert("Правильно");
            playAgain();
          } else if (num > randomNumber) {
            alert("Меньше, осталось попыток " + attempts);
            attempts--;
          } else if (num < randomNumber) {
            alert("Больше, осталось попыток " + attempts);
            attempts--;
          } else if (userNumber === "" || userNumber === " ") {
            alert("Введите числовое значение, осталось попыток " + attempts);
            attempts--;
          }
        }
        if (attempts === 0) {
          alert("Попытки закончились");
          playAgain();
        }
      }
    }
  };

})();