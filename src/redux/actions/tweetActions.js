const actions = {
  setTweets: (tweets) => {
    return {
      type: "SET_TWEETS",
      payload: tweets,
    };
  },
};
export default actions;
