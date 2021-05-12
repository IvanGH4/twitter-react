import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/tweetActions";
import axios from "axios";
import SingleTweet from "./SingleTweet";

function TweetsList() {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/index-tweets",
        {
          headers: {
            Authorization: `token ${user.token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.tweets) {
        dispatch(actions.setTweets(response.data.tweets));
      }
    };
    getTweets();
  }, []);

  return (
    <div>
      <SingleTweet />
    </div>
  );
}

export default TweetsList;
