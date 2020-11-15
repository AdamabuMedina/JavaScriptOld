import Counter from "../counter"
import css from './button.css'

const cnt = new Counter(1)
let btn = document.createElement("button")
let div = document.querySelector(".container")
btn.appendChild(document.createTextNode(`${cnt} clicks`))
div.appendChild(btn)
btn.addEventListener("click", cnt.increment())