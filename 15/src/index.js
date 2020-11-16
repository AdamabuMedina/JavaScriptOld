import React from "react"
import ReactDOM from "react-dom"

// React-компонент (функциональный)
const HelloWorld = () => {
   return <h1>Hello World</h1>
}

ReactDOM.render(
   <HelloWorld />,
   document.querySelector("#app")
)