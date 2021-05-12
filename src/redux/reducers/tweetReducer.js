import produce from "immer";
const INITIAL_STATE = [];

const tweetReducer = produce((state, action) => {
  switch (action.type) {
    case "SET_TWEETS":
      return (state = action.payload);
    default:
      return state;
  }
}, INITIAL_STATE);

export default tweetReducer;
