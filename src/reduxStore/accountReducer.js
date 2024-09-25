const initialState = {
  name: "Ranjit",
  mobile: 9966189948,
  balance: 56987,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDNAME":
      return {
        ...state,
        name: action.payload,
      };
    case "ADDMOBILE":
      return {
        ...state,
        mobile: action.payload,
      };
    case "ADDBALANCE":
      return {
        ...state,
        balance: state.balance + +action.payload,
      };
    case "WITHDRAWBALANCE":
      return {
        ...state,
        balance: state.balance - +action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
