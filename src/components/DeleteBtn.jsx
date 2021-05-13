import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";
import React, { useState } from "react";

function DeleteBtn({ tweet }) {
  const loggedUser = useSelector((state) => state.user);
  console.log(loggedUser);
  console.log(tweet);

  const dispatch = useDispatch();

  const handleClick = async () => {
    // dispatch(actions.deleteTweet(tweet._id));
    await axios.delete("http://localhost:8080/api/tweets", {
      data: {
        id: tweet._id,
      },
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <button className="btn" onClick={handleClick}>
      <i className="fas fa-trash" style={{ color: "#8899a6" }}></i>
    </button>
  );
}

export default DeleteBtn;
