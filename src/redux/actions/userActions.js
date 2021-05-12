const actions = {
  setUser: (user) => {
    return {
      type: "SET_USER",
      payload: user,
    };
  },
};
export default actions;
