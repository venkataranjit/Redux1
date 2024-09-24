import { createStore } from "redux";

const initialState = {
  name: "",
  age: null,
  balance: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDNAME":
      return {
        ...state,
        name: action.payload,
      };
    case "ADDAGE":
      return {
        ...state,
        age: action.payload,
      };
    case "ADDBALANCE":
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(accountReducer);

console.log(store.getState());
store.dispatch({ type: "ADDNAME", payload: "Ranjit" });
console.log(store.getState());
store.dispatch({ type: "ADDAGE", payload: 36 });
console.log(store.getState());
store.dispatch({ type: "ADDBALANCE", payload: 105420 });
console.log(store.getState());
