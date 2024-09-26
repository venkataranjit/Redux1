const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "CREDIT_TRANSACTION":
      return [
        ...state,
        {
          id: Date.now(),
          transactionType: "Credit",
          amount: action.payload,
          date: Date.now().toString(),
        },
      ];
    case "DEBIT_TRANSACTION":
      return [
        ...state,
        {
          id: Date.now(),
          transactionType: "Debit",
          amount: action.payload,
          date: Date.now().toString(),
        },
      ];

    default:
      return state;
  }
};

export default transactionReducer;
