import produce from "immer";
const INITIAL_STATE = [];

const tweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TWEETS":
      return action.payload;
    case "ADD_TWEET":
      return produce(state, (draft) => {
        draft.unshift(action.payload);
      });
    // return [...state, action.payload];
    case "UPDATE_LIKE":
      return produce(state, (draft) => {
        let tweetBeingLiked = draft.find(
          (tweet) => tweet._id === action.payload.tweetId
        );
        console.log("Tweet", tweetBeingLiked);
        if (
          tweetBeingLiked.likes.some((like) => like === action.payload.userId)
        ) {
          let idxOfUserId = tweetBeingLiked.likes.indexOf(
            action.payload.userId
          );

          tweetBeingLiked.likes.splice(idxOfUserId, 1);
        } else {
          tweetBeingLiked.likes.push(action.payload.userId);
        }
      });
    case "UPDATE_COMMENT":
      return produce(state, (draft) => {
        let tweetBeingCommented = draft.find(
          (tweet) => tweet._id === action.payload.tweetId
        );
        tweetBeingCommented.comments.push(action.payload.comment);
      });
    case "DELETE_TWEET":
      // return produce(state, (draft) => {
      //   draft.filter((tweet) => tweet._id !== action.payload);
      // });
      return state.filter((tweet) => tweet._id !== action.payload);
    default:
      return state;
  }
};

export default tweetReducer;
