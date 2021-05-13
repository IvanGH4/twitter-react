const actions = {
  setTweets: (tweets) => {
    return {
      type: "SET_TWEETS",
      payload: tweets,
    };
  },

  deleteTweet: (tweetId) => {
    return {
      type: "DELETE_TWEET",
      payload: tweetId,
    };
  },

  updateLike: (tweetId, userId) => {
    return {
      type: "UPDATE_LIKE",
      payload: { tweetId, userId },
    };
  },
};
export default actions;
