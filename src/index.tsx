import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import courses from "./data/courses/courses.json";
import chats from "./data/community/chats.json";
import youTube from "./data/community/youTube.json";
import { ICourse } from "./types";

const coursesData: ICourse[] = JSON.parse(JSON.stringify(courses));

const communityData = {
  chats: JSON.parse(JSON.stringify(chats)),
  youTube: JSON.parse(JSON.stringify(youTube)),
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router courses={coursesData} community={communityData} />
  </React.StrictMode>
);
