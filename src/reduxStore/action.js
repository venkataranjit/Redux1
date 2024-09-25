export function addName(name) {
  return {
    type: "ADDNAME",
    payload: name,
  };
}

export function addMobile(mobile) {
  return {
    type: "ADDMOBILE",
    payload: mobile,
  };
}

export function deposite(amount) {
  return {
    type: "ADDBALANCE",
    payload: amount,
  };
}

export function withdraw(amount) {
  return {
    type: "WITHDRAWBALANCE",
    payload: amount,
  };
}
