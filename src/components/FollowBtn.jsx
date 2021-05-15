import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";
import currUserActions from "../redux/actions/currUserActions";
import { useLocation } from "react-router-dom";

function FollowBtn({ user }) {
  console.log("user", user);
  const loggedUser = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.currentUser);
  const [isFollowing, setIsFollowing] = useState(
    user.followers.some((follower) => follower === loggedUser.userId)
  );

  const location = useLocation();

  useEffect(() => {
    if (currentUser && location.pathname !== "/home") {
      if (
        currentUser.followers.some(
          (follower) => follower._id === loggedUser.userId
        )
      ) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    } else {
      if (user.followers.some((follower) => follower === loggedUser.userId)) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  }, []);

  const dispatch = useDispatch();

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    dispatch(currUserActions.followCurrUser(loggedUser.userId));
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
