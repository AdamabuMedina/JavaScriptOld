window.onload = function () {

   let api = "https://swapi.dev/api/"
   let requestURL = api + "people/"
   let searchURL = api + "people/?search="

   const ul = document.createElement("ul")

   let button = document.getElementById("search_request_btn")
   let search = document.getElementById("person__search__input")
   let name = document.getElementById("name")
   let height = document.getElementById("height")
   let mass = document.getElementById("mass")
   let birth_year = document.getElementById("birth_year")
   let films_count = document.getElementById("films_count")

   function updateInfo(json) {
      json = json.results[0]
      searchURLValue = searchURL + search.value
      requestURLValue = requestURL + search.value
      console.log(searchURLValue)
      name.innerText = json.name
      console.log()
      name.innerText = json.name
      height.innerText = json.height
      mass.innerText = json.mass
      birth_year.innerText = json.birth_year
      films_count.innerText = json.films.length
   }

   function getInfo() {
      searchURLValue = searchURL + search.value
      fetch(searchURLValue)
         .then(response => response.json())
         .then(text => updateInfo(text))
         .catch(err => { })
   }
   button.addEventListener("click", getInfo)
};
