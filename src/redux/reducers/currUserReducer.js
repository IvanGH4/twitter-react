import produce from "immer";
const INITIAL_STATE = [];

const currUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURR_USER":
      return action.payload;
    case "FOLLOW_CURR_USER":
      return produce(state, (draft) => {
        if (
          draft.followers.some((follower) => follower._id === action.payload)
        ) {
          let idx = draft.followers.indexOf(action.payload);
          draft.followers.splice(idx, 1);
        } else {
          draft.followers.push(action.payload);
        }
      });
    default:
      return state;
  }
};

export default currUserReducer;
