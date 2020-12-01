import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
   comments: commentsReducer,
   app: appReducer
})