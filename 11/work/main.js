let button = document.getElementById("search_request_btn")
let search = document.getElementById("person__search__input")
let name = document.getElementById("name")
let height = document.getElementById("height")
let mass = document.getElementById("mass")
let birth_year = document.getElementById("birth_year")
let films_count = document.getElementById("films_count")

function getInfo() {
   fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(json => updateInfo(json))
}

function searchInfo() {
   fetch("https://swapi.dev/api/people/?search=obi")
      .then(function (response) {
         console.log(response.json())
      })
}

function searching() {
   search.value = json.name
}

function updateInfo(json) {
   name.innerText = json.name
   height.innerText = json.height
   mass.innerText = json.mass
   birth_year.innerText = json.birth_year
   films_count.innerText = json.films.length
}
button.addEventListener("click", getInfo)
search.addEventListener("keydown", searchInfo)