import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/tweetActions";
import axios from "axios";
import SingleTweet from "./SingleTweet";

function TweetsList() {
  const user = useSelector((state) => state.userReducer);

  const tweets = useSelector((state) => state.tweetReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/index-tweets",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
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
    <>
      {tweets &&
        tweets.map((tweet) => {
          return <SingleTweet key={tweet.id} tweet={tweet} />;
        })}
    </>
  );
}

export default TweetsList;
