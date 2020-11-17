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
         todos: [
            { name: "Настроить webpack", checked: true },
            { name: "Настроить webpack-dev-server", checked: true },
            { name: "Написать TodoApp", checked: false },
         ],
         newTodoText: ""
      }
   }

   toggleTodo(key) {
      const todos = this.state.todos.map((todo, i) => {
         if (key === i) {
            return {
               name: todo.name,
               checked: !todo.checked
            }
         } else {
            return todo
         }
      })
      // Обновляем состояние приложения
      this.setState({ todos })
   }

   addTodo(value) {
      const todos = this.state.todos
      todos.push({
         name: this.state.newTodoText,
         checked: false
      })

      this.setState({
         todos,
         newTodoText: ""
      })
   }

   render() {
      // JSX-синтаксис
      return (
         <div>
            <h2>Todo list</h2>
            <ol>
               {
                  this.state.todos.map((todo, i) => {
                     const className = todo.checked ? "checked" : ""
                     return (
                        <li
                           className={className}
                           key={i}
                           onClick={ev => { this.toggleTodo(i) }}>
                           {todo.name}
                        </li>
                     )
                  })
               }
            </ol>
            <input
               type="text"
               placeholder="Новая задача"
               value={this.state.newTodoText}
               onChange={ev => {
                  this.setState({ newTodoText: ev.target.value })
               }}
               onKeyUp={ev => {
                  if (ev.keyCode === 13) {
                     this.addTodo()
                  }
               }}
            />
         </div>

      )
   }
}


ReactDOM.render(
   <TodoApp />,
   document.querySelector("#app")
)