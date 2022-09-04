import React from "react";
import CommunityBlock from "../Components/CommunityBlock";
import CommunityLink from "../Components/CommunityLink";
import Tile from "../Components/Tile";

const Home: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="appName">Comsos Course</div>
        <div className="appDiscription">
          Тут ты сможешь узнать про экосистему космос и как в ней существовать.
        </div>
      </div>
      <div className="buttonsRow">
        <Tile mode="course" />
        <Tile mode="topics" />
      </div>
      <div>
        <Tile mode="earning" />
      </div>
      <div className="communityBlocks">
        <CommunityBlock type="chats" />
        <CommunityBlock type="videoContent" />
      </div>
    </div>
  );
};

export default Home;
