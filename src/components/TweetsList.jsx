import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/tweetActions";
import axios from "axios";
import SingleTweet from "./SingleTweet";

function TweetsList() {
  const user = useSelector((state) => state.user);

  const tweets = useSelector((state) => state.tweets);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(
        "https://twitter-api-pi.vercel.app/api/tweets",
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
      {tweets.length > 0 &&
        tweets.map((tweet) => {
          return <SingleTweet key={tweet._id} tweet={tweet} />;
        })}
    </>
  );
}

export default TweetsList;
