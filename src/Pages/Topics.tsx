import React from "react";
import { NavLink } from "react-router-dom";
import topics from "./../data/courses/courses.json";

interface ITopic {
  id: number;
  name: string;
  subtitle: string;
  mainInfo: string;
  videoUrls: string[];
}

const Topics: React.FunctionComponent = () => {
  const topicsList = JSON.parse(JSON.stringify(topics)).map((topic: ITopic) => {
    return (
      <div className="topic" key={topic.id}>
        <NavLink to={`/course/${topic.id}`}>
          <button className="button">{topic.name}</button>
        </NavLink>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="topicsTitle">Темы</div>
      <div className="topicsList">{topicsList}</div>
    </div>
  );
};

export default Topics;
