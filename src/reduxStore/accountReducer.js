const initialData = {
  name: "AArvi",
  mobile: 9966189948,
  balance: 42653,
};

const accountReducer = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "UPDATE_MOBILE":
      return {
        ...state,
        mobile: action.payload,
      };
    case "UPDATE_DEPOSIT":
      return {
        ...state,
        balance: state.balance + +action.payload,
      };
    case "UPDATE_WITHDRAW":
      return {
        ...state,
        balance: state.balance - +action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
