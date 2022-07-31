export const incNum = (num) => {
  return {
    type: "Increment",
    payload: num,
  };
};

export const decNum = (num) => {
  return {
    type: "Decrement",
    payload: num,
  };
};
