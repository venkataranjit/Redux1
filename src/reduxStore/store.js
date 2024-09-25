import { createStore } from "redux";
import accountReducer from "./accountReducer";

export const store = createStore(accountReducer);
