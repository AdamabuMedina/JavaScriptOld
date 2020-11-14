window.onload = function () {
   let searchURL = "https://swapi.dev/api/people/?search="

   let buttonSearch = document.getElementById("search_request_btn")
   let search = document.getElementById("person__search__input")
   let name = document.getElementById("name")
   let height = document.getElementById("height")
   let mass = document.getElementById("mass")
   let birth_year = document.getElementById("birth_year")
   let films_count = document.getElementById("films_count")
   let link = document.querySelector(".li__link")
   let searchResut = document.querySelector(".search__result")

   const results = document.querySelector(".search__result")

   function getInfo() {
      searchURLValue = searchURL + search.value
      fetch(searchURLValue)
         .then(response => response.json())
         .then(text => { displayResults(text); personSetting(text) })
         .catch(err => { alert("Произошла ошибка" + err) })
   }

   function getLi() {
      searchURLValue = searchURL + search.value
      fetch(searchURLValue)
         .then(response => response.json())
         .catch(err => { })
   }

   function displayResults(json) {
      let output = "";
      json.results.forEach(item => {
         output += `
            <li class="li__link">
               ${item.name}
            </li>
         `
      })
      results.innerHTML = output;
   }

   function personSetting(json) {
      searchResut.addEventListener("click", function (e) {
         document.querySelectorAll(".li__link").forEach(function (item, index) {
            if (e.target == item) {
               jsonResult = json.results[index]
               searchURLValue = searchURL + search.value
               name.innerText = jsonResult.name
               height.innerText = jsonResult.height
               mass.innerText = jsonResult.mass
               birth_year.innerText = jsonResult.birth_year
               films_count.innerText = jsonResult.films.length
            }
         })
      })
   }

   getLi()

   buttonSearch.addEventListener("click", getInfo);


};
