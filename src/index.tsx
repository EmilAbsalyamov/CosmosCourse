import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import courses from "./data/courses/courses.json";
import { ICourse } from "./types";

const coursesData: ICourse[] = JSON.parse(JSON.stringify(courses));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router courses={coursesData} />
  </React.StrictMode>
);
