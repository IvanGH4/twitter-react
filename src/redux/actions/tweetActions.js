const actions = {
  setTweets: (tweets) => {
    return {
      type: "SET_TWEETS",
      payload: tweets,
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
