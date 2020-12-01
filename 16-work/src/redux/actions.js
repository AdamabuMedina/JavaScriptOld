import { CREATE_COMMENT, DELETE_COMMENT, HIDE_ALERT, SHOW_ALERT } from "./types";

export function createComment(comment) {
   return {
      type: CREATE_COMMENT,
      payload: comment
   }
}

export function deleteComment(id) {
   return {
      type: DELETE_COMMENT,
      id
   }
}



export function showAlert(text) {
   return dispatch => {
      dispatch({
         type: SHOW_ALERT,
         payload: text
      })

      setTimeout(() => {
         dispatch(hideAlert())
      }, 3000)
   }
}

export function hideAlert() {
   return {
      type: HIDE_ALERT
   }
}