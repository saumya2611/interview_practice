import { combineReducers } from "redux";
import { todoReducers } from "./todoReducer";

export const rootReducers = combineReducers({
  todoReducers,
});
