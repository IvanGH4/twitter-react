import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default HomePage;
