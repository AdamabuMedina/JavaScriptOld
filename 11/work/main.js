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

   const results = document.querySelector(".search__result")

   function updateInfo(json) {
      jsonResult = json.results[0]
      console.log(json.results.length)
      searchURLValue = searchURL + search.value
      name.innerText = jsonResult.name
      height.innerText = jsonResult.height
      mass.innerText = jsonResult.mass
      birth_year.innerText = jsonResult.birth_year
      films_count.innerText = jsonResult.films.length
   }


   function getInfo() {
      searchURLValue = searchURL + search.value
      fetch(searchURLValue)
         .then(response => response.json())
         .then(text => updateInfo(text))
         .catch(err => { })
   }

   function getLi() {
      searchURLValue = searchURL + search.value
      fetch(searchURLValue)
         .then(response => response.json())
         .then(text => displayResults(text))
         .catch(err => { })
   }

   function displayResults(json) {
      let output = "";
      json.results.forEach(item => {
         output += `
            <li>
               <a class="li__link">${item.name}</a>
            </li>
         `
      })
      results.innerHTML = output;
   }

   getLi()

   buttonSearch.addEventListener("click", getInfo);

   link.addEventListener("click", e => {
      e.preventDefault()
      updateInfo(e.target.textContent.trim().toLowerCase());
   });

};
