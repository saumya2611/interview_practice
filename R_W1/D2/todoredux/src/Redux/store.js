import { createStore } from "redux";
import { rootReducers } from "./Reducer";

export const store = createStore(rootReducers);
