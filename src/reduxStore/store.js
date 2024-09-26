import { createStore } from "redux";
import { combineReducers } from "redux";

import accountReducer from "./accountReducer";

import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});

const store = createStore(rootReducer);

export default store;
