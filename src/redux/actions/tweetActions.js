const actions = {
  setTweets: (tweets) => {
    return {
      type: "SET_TWEETS",
      payload: tweets,
    };
  },

  addTweet: (tweet) => {
    return {
      type: "ADD_TWEET",
      payload: tweet,
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
