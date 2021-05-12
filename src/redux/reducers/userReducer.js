import produce from "immer";
const INITIAL_STATE = [];

const userReducer = produce((state, action) => {
  switch (action.type) {
    case "SET_USER":
      return (state = action.payload);
    default:
      return state;
  }
}, INITIAL_STATE);

export default userReducer;
