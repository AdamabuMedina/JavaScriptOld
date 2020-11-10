

// Задание №1


let userNumOne =  parseInt (prompt('Введите число А'))

    if (isNaN(userNumOne)) {
      while (userNumOne == null || isNaN(userNumOne) )
      userNumOne = +  prompt('Введите число А')
    } 

let userNumTwo =  parseInt (prompt('Введите число B'))

    if (isNaN(userNumTwo  )) {
      while (userNumTwo == null || isNaN(userNumTwo) )
        userNumTwo   = + prompt('Введите число B')
    }

    switch(true) {

        case (userNumOne > userNumTwo  ):
        alert('Первое число больше второго');
        break;

        case (userNumOne < userNumTwo  ):
        alert('Второе число больше первого');
        break;

        case (userNumOne == userNumTwo  ):
        alert('Числа равны');
        break;
    }


    // Задание №2

let firstYear = prompt("Пожалуйста, введите год - начало диапазона");
let secondYear = prompt("Пожалуйста, введите год - конец диапазона");

let leapYearCount = 0;

function isLeapYear(year) {
    return year%4 == 0 && year%100 != 0 || (year%400 == 0);
    }
    
    if (secondYear < firstYear) {
      for (i = secondYear; i <= firstYear; i++) {
      if (isLeapYear(i)) {
          console.log(i);
          leapYearCount++;
        }
      }
    } else if (firstYear < secondYear) {
      for (i = firstYear; i <= secondYear; i++) {
      if (isLeapYear(i)) {
          console.log(i);
          leapYearCount++;
        }
      }
    }  
alert('В заданном диапазоне найдено ' + leapYearCount + ' високосных лет, они записаны в консоли.');

// Задание №3

let j, summa = 0;

while ((j = prompt('Введите число!')) !== null) {
  let num = +j;
  if (!isNaN(num))
      summa += num;
}

alert (summa);


