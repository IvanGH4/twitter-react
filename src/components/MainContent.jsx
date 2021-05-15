import React from "react";
import TweetCreator from "./TweetCreator";
import "./TweetList.css";
import TweetsList from "./TweetsList";

function MainContent() {
  return (
    <main className="col-lg-6 px-4">
      <TweetCreator />
      <TweetsList />
    </main>
  );
}

export default MainContent;
