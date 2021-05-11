import React from "react";
import TweetList from "../components/TweetList";
import LeftSidebar from "../components/LeftSidebar";
function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <LeftSidebar />
        <TweetList />
      </div>
    </div>
  );
}

export default HomePage;
