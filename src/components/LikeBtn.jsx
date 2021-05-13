import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";
import React, { useState } from "react";

function LikeBtn({ tweet }) {
  const loggedUser = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(
    tweet.likes.some((like) => like === loggedUser.userId)
  );

  const dispatch = useDispatch();

  const handleClick = async () => {
    setIsLiked(!isLiked);
    dispatch(actions.updateLike(tweet._id, loggedUser.userId));
    await axios.patch(
      "http://localhost:8080/api/tweets",
      {
        id: tweet._id,
      },
      {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <button onClick={handleClick} className="btn p-0 no-focus">
      {isLiked ? (
        <i className="fas fa-heart text-danger centro__svg like-animation"></i>
      ) : (
        <i
          className="far fa-heart centro__svg "
          style={{ color: "#8899a6" }}
        ></i>
      )}
    </button>
  );
}

export default LikeBtn;
