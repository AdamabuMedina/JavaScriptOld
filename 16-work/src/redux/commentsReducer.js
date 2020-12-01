import { CREATE_COMMENT, DELETE_COMMENT } from "./types"

const initialState = {
   comments: [],
}

export const commentsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_COMMENT:
         return { ...state, comments: state.comments.concat(action.payload) }
      case DELETE_COMMENT:
         return state.comments.filter((comment, id) => id !== action.id)
      default: return state
   }
}