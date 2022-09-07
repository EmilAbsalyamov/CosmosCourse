import React from "react";
import Tile from "../components/Tile";
import { ICommunityData } from "../types";
import Footer from "../components/Footer";

interface IProps {
  community: ICommunityData;
}

const Home: React.FunctionComponent<IProps> = ({ community }) => {
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
        <Tile mode="courses" />
      </div>
      <div>
        <Tile mode="earning" />
      </div>
      <Footer community={community} />
    </div>
  );
};

export default Home;
