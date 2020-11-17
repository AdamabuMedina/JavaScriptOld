import React from "react"
import ReactDOM from "react-dom"

function HelloWorld() {
   return <h1>Hello React 123</h1>
}

ReactDOM.render(
   <HelloWorld />,
   document.querySelector("#app")
)