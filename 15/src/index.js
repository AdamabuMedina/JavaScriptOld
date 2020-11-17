import React from "react"
import ReactDOM from "react-dom"

// React-компонент (функциональный)
const HelloWorld = () => {
   return <h1>Hello React 123</h1>
}

// React-компонент (class-based)
class TodoApp extends React.Component {
   constructor() {
      super(); // конструктор из React.Component
      // Исходное состояние нашего приложения
      this.state = {

      }
   }
}


ReactDOM.render(
   <HelloWorld />,
   document.querySelector("#app")
)