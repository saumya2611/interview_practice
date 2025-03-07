import { combineReducers } from "redux";
import { crudReducers } from "./crudReducer";

export const rootReducers = combineReducers({
  crudReducers,
});
