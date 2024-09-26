export function updateName(name) {
  return {
    type: "UPDATE_NAME",
    payload: name,
  };
}

export function updateMobile(mobile) {
  return {
    type: "UPDATE_MOBILE",
    payload: mobile,
  };
}

export function updateDeposit(balance) {
  return {
    type: "UPDATE_DEPOSIT",
    payload: balance,
  };
}

export function updateWithdraw(balance) {
  return {
    type: "UPDATE_WITHDRAW",
    payload: balance,
  };
}

export function addTransaction(balance) {
  return {
    type: "CREDIT_TRANSACTION",
    payload: balance,
  };
}

export function withdrawTransaction(balance) {
  return {
    type: "DEBIT_TRANSACTION",
    payload: balance,
  };
}
