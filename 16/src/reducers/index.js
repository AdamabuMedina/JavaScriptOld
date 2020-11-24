const todos = (state = [], action) => {

   switch (action.type) {
      case "ADD_TODO":
         return [
            ...state,
            { id: action.id, name: action.name, checked: false }
         ]

      case "TOGGLE_TODO":
         return state.map(todo => {
            if (todo.id === action.id) {
               return { id: todo.id, name: todo.name, checked: !todo.checked }
            }
            return todo
         })

      default:
         return state
   }
}

export default todos