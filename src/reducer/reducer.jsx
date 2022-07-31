const initialState = 0;

const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payload;
    case "Decrement":
      return state - action.payload;
    default:
      return state;
  }
};

export default changeNum;
