import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";
import { useLocation } from "react-router-dom";

function FollowBtn({ user }) {
  console.log(user);
  const loggedUser = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(
    user.followers.some((follower) => follower === loggedUser.userId)
  );

  const dispatch = useDispatch();

  const location = useLocation();

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    await axios.patch(
      "http://localhost:8080/api/users",
      {
        id: user._id,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (location.pathname === "/home") {
      const getTweets = async () => {
        const response = await axios.get("http://localhost:8080/api/tweets", {
          headers: {
            Authorization: `Bearer ${loggedUser.token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data.tweets) {
          dispatch(actions.setTweets(response.data.tweets));
        }
      };
      getTweets();
    }
  };
  return (
    <button
      className="rounded-pill px-3 py-1 follow-btn fw-bold"
      onClick={handleClick}
    >
      {!isFollowing ? "Seguir" : "Siguiendo"}
    </button>
  );
}

export default FollowBtn;
