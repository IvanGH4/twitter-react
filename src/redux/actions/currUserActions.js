const currUserActions = {
  setCurrUser: (user) => {
    return {
      type: "SET_CURR_USER",
      payload: user,
    };
  },

  followCurrUser: (id) => {
    return {
      type: "FOLLOW_CURR_USER",
      payload: id,
    };
  },
};
export default currUserActions;
