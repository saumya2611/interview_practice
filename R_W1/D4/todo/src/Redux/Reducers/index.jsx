import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducers";

export const rootReducer = combineReducers({
  todoReducer,
});
