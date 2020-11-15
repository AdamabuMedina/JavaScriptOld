import './button.css'

let count = 0

let bodyHtml = document.body
let divContainer = document.createElement("div")
divContainer.classList.add("container")
let btn = document.createElement("button")
btn.classList.add("btn")

btn.innerHTML = `${count} clicks`
btn.addEventListener("click", function () {
   btn.innerHTML = `${count++} clicks`
})

divContainer.appendChild(btn)
bodyHtml.appendChild(divContainer)
