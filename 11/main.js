// Находим на странице нужную кнопку
let btn = document.querySelector("button")

// Добавляем обработчик события click
btn.addEventListener("click", function (e) {
   e.preventDefault();//отменяем стандартн.повередение

   // //Создаем новый экземпляр объекта XHR
   // // для отправки асинхронного запроса
   // let request = new XMLHttpRequest();


   // // создаем еще один обработчик успешного ответа от сервера
   // request.onload = function () {
   //    // В момент когда от сервера придет ответ
   //    let text = request.responseText;
   //    document.querySelector(".text").innerHTML = text;
   // }

   // // Открываем соеденение и отправляем запрос
   // request.open("GET", "/data.txt");
   // request.send();

   window.fetch("/data.json")
      .then(function (response) {
         console.log(response)
         return response.json();
      })
      .then(function (response) {
         document.querySelector(".project")
            .innerHTML = response.project;
         document.querySelector(".course")
            .innerHTML = response.course;
         document.querySelector(".module")
            .innerHTML = response.module;
         document.querySelector(".teacher")
            .innerHTML = response.teacher;
      })


})